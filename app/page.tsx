
import { supabase } from "@/lib/supabase";

export default async function Home() {
  let status = "Belum disambungkan";

  if (supabase) {
    const { error } = await supabase
      .from("photos")
      .select("id")
      .eq("status", "published")
      .limit(1);

    status = error ? "Sambungan perlu disemak" : "Supabase aktif";
  }

  return (
    <main style={{fontFamily:"Arial",background:"#f7f7f2",minHeight:"100vh",color:"#18372c"}}>
      <header style={{background:"#063b2b",color:"#e4cf91",padding:25}}>
        <b>SIDANG REDAKSI</b>
        <div>MOMENTS PHOTOGRAPHY · MAKA 2026</div>
      </header>
      <section style={{background:"#06432f",color:"white",padding:"80px 20px",textAlign:"center"}}>
        <h1 style={{fontSize:45}}>Setiap Detik,<br/>Sebuah Kenangan</h1>
        <p>Abadikan momen kejayaan anda di MAKA 2026.</p>
      </section>
      <section style={{padding:40,textAlign:"center"}}>
        <h2>Galeri MAKA 2026</h2>
        <p>Galeri foto akan dibuka tidak lama lagi.</p>
        <p>4R — RM5 | 5R — RM8</p>
        <small>Status: {status}</small>
      </section>
    </main>
  );
}
