"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Section } from "@/components/sections/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Building2, Tag, ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";

interface Quote {
  id: string;
  created_at: string;
  company_name: string;
  industry: string;
  description: string;
  status: string;
}

export default function QuotesDashboard() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      const { data } = await supabase
        .from("quotes")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) setQuotes(data as Quote[]);
      setLoading(false);
    }

    fetchQuotes();

    // Subscribe to new quotes
    const subscription = supabase
      .channel('quotes_channel')
      /* eslint-disable @typescript-eslint/no-explicit-any */
      .on(
        'postgres_changes' as any,
        { event: 'INSERT', table: 'quotes', schema: 'public' },
        (payload: RealtimePostgresInsertPayload<Quote>) => {
          setQuotes((prev) => [payload.new, ...prev]);
        }
      )
      /* eslint-enable @typescript-eslint/no-explicit-any */
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-20">
      <Section>
        <div className="space-y-12">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-white">RFQ Tracking Dashboard</h1>
              <p className="text-white/60">Monitor and manage technical proposal requests in real-time.</p>
            </div>
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20 group-focus-within:text-gold transition-colors" />
               <input
                 className="bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 py-3 text-white focus:border-gold/50 outline-none w-full md:w-80 transition-all"
                 placeholder="Search by company..."
               />
            </div>
          </header>

          <div className="grid gap-6">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                 <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
              </div>
            ) : quotes.length === 0 ? (
              <div className="glass-premium p-20 rounded-[3rem] border border-white/5 text-center space-y-4">
                 <Building2 className="h-12 w-12 text-white/10 mx-auto" />
                 <p className="text-white/40 text-xl">No quote requests found.</p>
              </div>
            ) : (
              quotes.map((quote, index) => (
                <motion.div
                  key={quote.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="glass-premium border-white/5 hover:border-gold/20 transition-all group cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row items-center">
                        <div className="p-8 flex-1 w-full space-y-4">
                           <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                 <Building2 className="h-5 w-5 text-gold/60" />
                                 <h3 className="text-xl font-bold text-white">{quote.company_name}</h3>
                              </div>
                              <Badge variant="gold" className="capitalize">{quote.status}</Badge>
                           </div>

                           <p className="text-white/50 line-clamp-2 text-sm">
                              {quote.description}
                           </p>

                           <div className="flex flex-wrap gap-6 text-xs text-white/30 uppercase tracking-[0.2em] font-bold">
                              <span className="flex items-center gap-2"><Tag className="h-3 w-3" /> {quote.industry}</span>
                              <span className="flex items-center gap-2"><Clock className="h-3 w-3" /> {new Date(quote.created_at).toLocaleDateString()}</span>
                           </div>
                        </div>
                        <div className="bg-white/5 h-full p-8 border-l border-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                           <ChevronRight className="h-6 w-6 text-white/20 group-hover:text-gold transition-all group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
