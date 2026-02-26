import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Smartphone } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import IPadCursor from "@/components/IPadCursor";
import bkashQr from "@/assets/bkash-qr.jpg";

const SupportMe = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden animated-bg">
      <AnimatedBackground />
      <IPadCursor />

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-16">
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
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Bank Transfer</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><span className="text-foreground font-medium">Bank Name:</span> Your Bank Name</p>
              <p><span className="text-foreground font-medium">Account Name:</span> Your Account Name</p>
              <p><span className="text-foreground font-medium">Account Number:</span> XXXX-XXXX-XXXX</p>
              <p><span className="text-foreground font-medium">Branch:</span> Your Branch</p>
              <p><span className="text-foreground font-medium">Routing Number:</span> XXXXXXXXX</p>
            </div>
          </div>

          {/* Bkash */}
          <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Smartphone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">Bkash</h2>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="text-foreground font-medium">Number:</span> 01630591092</p>
                  <p><span className="text-foreground font-medium">Account Type:</span> Personal</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-white/90 p-4 flex flex-col items-center gap-2 max-w-[260px] mx-auto w-full">
              <img
                src={bkashQr}
                alt="Bkash QR Code for 01630591092"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-xs text-center text-muted-foreground/70">
              Scan the QR code with the Bkash app or send money to the number above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMe;
