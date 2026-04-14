"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Heart, Sparkles, Coffee, User, ChevronRight } from "lucide-react";

const films = [
  { id:1, title:"Past Lives", director:"Celine Song", why:"You've been leaning into quiet reflection.", pairing:"Shio Ramen", image:"https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1000", match:98, provider:"Netflix", trailer:"https://www.youtube.com/embed/2pc8VCGPhl0" },
  { id:2, title:"Dune: Part Two", director:"Denis Villeneuve", why:"Your cortisol requested scale.", pairing:"Spicy Miso", image:"https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?w=1000", match:94, provider:"Prime", trailer:"https://www.youtube.com/embed/Way9Dexny3w" },
  { id:3, title:"Perfect Days", director:"Wim Wenders", why:"Reset your dopamine.", pairing:"Tokyo Shoyu", image:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000", match:99, provider:"Apple TV+", trailer:"https://www.youtube.com/embed/3bzDmWFfOp0" },
];

export default function Home() {
  const [user, setUser] = useState<null | { name: string }>(null);
  const [activeTrailer, setActiveTrailer] = useState<string | null>(null);
  const [showDonate, setShowDonate] = useState(false);

  if (!user) return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden"><div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" /><div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-orange-100/40 rounded-full blur-[120px] mix-blend-multiply" /></div>
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="w-full max-w-md bg-white/40 backdrop-blur-2xl border border-white/60 shadow-glass rounded-[2.5rem] p-10 text-center relative z-10">
        <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-8"><Coffee className="text-white w-8 h-8" /></div>
        <h1 className="font-serif text-4xl font-light text-zinc-900 mb-2">Moody Chai</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-8">Steep your mood</p>
        <button onClick={()=>setUser({name:"Visionary"})} className="w-full bg-zinc-900 text-white rounded-2xl py-4 font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all">Enter the Lounge <ChevronRight className="w-4 h-4" /></button>
        <p className="text-xs text-zinc-400 mt-6">Free forever. Donations welcome.</p>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] pb-32 relative">
      <div className="fixed inset-0 pointer-events-none"><div className="absolute top-0 left-1/4 w-[80vw] h-[40vh] bg-rose-100/30 rounded-full blur-[120px]" /><div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-blue-50/40 rounded-full blur-[100px]" /></div>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/40 backdrop-blur-2xl border-b border-white/40 py-4"><div className="max-w-2xl mx-auto px-6 flex justify-between items-center"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200" className="w-full h-full object-cover" /></div><div><p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Welcome</p><p className="text-sm font-semibold text-zinc-900">{user.name}</p></div></div><button onClick={()=>setShowDonate(true)} className="bg-zinc-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">Support</button></div></header>
      <main className="relative z-10 max-w-2xl mx-auto px-6 pt-28">
        <h1 className="font-serif text-4xl font-light text-zinc-900 mb-6">The chai is hot.<br/><span className="text-zinc-400">What are we feeling?</span></h1>
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">{["Reflective","Adrenaline","Wabi-Sabi","Cinematic","Cozy"].map((m,i)=> <button key={m} className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all ${i===0?"bg-zinc-900 text-white":"bg-white/50 border border-white text-zinc-600"}`}>{m}</button>)}</div>
        <div className="space-y-6 mt-8">
          {films.map(f=>(
            <motion.div key={f.id} whileHover={{y:-4}} className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-glass rounded-[2rem] overflow-hidden">
              <div className="relative h-64 bg-zinc-900"><div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-10" /><img src={f.image} className="w-full h-full object-cover opacity-80" /><div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-xs"><Sparkles className="w-3.5 h-3.5" />{f.match}% Match</div><div className="absolute bottom-5 left-5 z-20"><h3 className="text-3xl font-serif text-white">{f.title}</h3><p className="text-white/70 text-sm">Dir. {f.director}</p></div><button onClick={()=>setActiveTrailer(f.trailer)} className="absolute bottom-5 right-5 z-20 w-14 h-14 bg-white text-zinc-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Play className="w-6 h-6 ml-1" fill="currentColor" /></button></div>
              <div className="p-6"><p className="text-zinc-600 text-sm mb-4">{f.why}</p><div className="bg-zinc-50/50 border border-white rounded-2xl p-4 flex gap-4"><Coffee className="w-6 h-6 text-rose-500" /><div><p className="text-xs text-zinc-400 uppercase tracking-widest">Perfect Pairing</p><p className="text-sm font-medium">{f.pairing}</p></div></div><div className="mt-6 flex justify-between items-center"><button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900"><Heart className="w-5 h-5" />Save</button><span className="text-sm font-semibold text-zinc-700">{f.provider}</span></div></div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center"><button onClick={()=>setShowDonate(true)} className="text-xs font-semibold uppercase tracking-widest text-rose-400">Unlock Unlimited • R85/mo</button></div>
      </main>
      {activeTrailer && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={()=>setActiveTrailer(null)}><div className="relative w-full max-w-3xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden" onClick={e=>e.stopPropagation()}><iframe src={activeTrailer} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen /><button onClick={()=>setActiveTrailer(null)} className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40">✕</button></div></div>}
      {showDonate && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md" onClick={()=>setShowDonate(false)}><motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-glass-lg rounded-[2.5rem] p-8 max-w-md w-full" onClick={e=>e.stopPropagation()}><Heart className="w-10 h-10 text-rose-500 mx-auto mb-4" /><h3 className="font-serif text-2xl text-center mb-4">Support Moody Chai</h3><p className="text-center text-zinc-600 mb-6">Your donation keeps the steam alive.</p><a href="https://paypal.me/alextresor" target="_blank" className="block w-full py-4 bg-zinc-900 text-white text-center rounded-2xl font-medium hover:bg-zinc-800">Donate with PayPal</a><p className="text-xs text-center text-zinc-400 mt-4">PayPal: alextresor44@icloud.com</p></motion.div></div>}
      <style jsx global>{`.scrollbar-hide::-webkit-scrollbar{display:none}.scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}`}</style>
    </div>
  );
}
