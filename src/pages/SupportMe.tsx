import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

import bkashQr from "@/assets/bkash-qr.jpg";
import eblLogo from "@/assets/ebl-logo.png";
import bkashLogo from "@/assets/bkash-logo.svg";

const SupportMe = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden animated-bg">
      <AnimatedBackground />
      

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="sunset-text">Support Me</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-12">
          If you find LeoSetter useful, consider supporting its development. Every contribution helps!
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Bank Transfer */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                <img src={eblLogo} alt="Eastern Bank Limited" className="w-full h-full object-contain brightness-0 invert opacity-80" loading="lazy" decoding="async" width={28} height={28} />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Bank Transfer</h2>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Bank Name:</span> Eastern Bank PLC</p>
              <p><span className="text-foreground font-medium">Account Name:</span> ANAMUL HAQUE</p>
              <p><span className="text-foreground font-medium">Account No:</span> 0251440011024</p>
              <p><span className="text-foreground font-medium">Branch:</span> Khulshi, Chittagong, Bangladesh</p>
            </div>
          </div>

          {/* Bkash */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden p-1.5">
                <img src={bkashLogo} alt="bKash" className="w-full h-full object-contain brightness-0 invert opacity-80" loading="lazy" decoding="async" width={28} height={28} />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Bkash</h2>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Number:</span> 01630591092</p>
              <p><span className="text-foreground font-medium">Account Type:</span> Personal</p>
            </div>
            <div className="rounded-xl overflow-hidden p-3 bg-white/5 border border-white/10 flex justify-center max-w-[200px] mx-auto w-full">
              <div className="overflow-hidden rounded-md" style={{ aspectRatio: '1/1', width: '100%' }}>
                <img
                  src={bkashQr}
                  alt="Bkash QR Code for 01630591092"
                  className="w-full object-cover object-center"
                  style={{ height: '155%' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p className="text-xs text-center text-muted-foreground/70">
              Scan with the Bkash app to send money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMe;
