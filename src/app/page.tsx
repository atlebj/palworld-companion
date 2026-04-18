import Link from "next/link";
import { HomeSearch } from "../components/home/HomeSearch";
import { HomeBreeding } from "../components/home/HomeBreeding";
import { Dna, Calculator, Swords, Target, LayoutGrid, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 space-y-24">
      {/* 1. Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          🔥 Find the Best Pals, Breeding Combos & Builds
        </h1>

        <div className="py-4">
          <HomeSearch />
          <div className="text-slate-400 font-medium text-sm mt-4 mb-8">OR</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <Link
            href="/calculators/breeding-simulator"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            <Dna className="w-5 h-5 text-sky-400" />
            Breeding Calculator
          </Link>
          <Link
            href="/calculators/iv"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            <Calculator className="w-5 h-5 text-purple-400" />
            IV Calculator
          </Link>
          <Link
            href="/pals"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
          >
            <LayoutGrid className="w-5 h-5 text-emerald-400" />
            Explore Pals
          </Link>
        </div>

        <p className="text-sm text-slate-500 pt-4 font-medium uppercase tracking-wider">
          Optimize your Palworld gameplay in seconds
        </p>
      </section>

      {/* 2. Start Here */}
      <section className="max-w-3xl mx-auto">
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            Start Here <span className="text-2xl">👇</span>
          </h2>
          <div className="space-y-4">
            <p className="text-slate-300 font-medium">1. Choose what you want to do:</p>
            <div className="grid gap-3">
              <Link
                href="/calculators/breeding-simulator"
                className="flex items-center p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-sky-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mr-4 group-hover:bg-sky-500/20 transition-colors">
                  <Dna className="w-5 h-5 text-sky-400" />
                </div>
                <span className="font-bold text-slate-200 group-hover:text-sky-400 transition-colors">Find best breeding combo</span>
                <ArrowRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors" />
              </Link>
              <Link
                href="/calculators/damage"
                className="flex items-center p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-red-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mr-4 group-hover:bg-red-500/20 transition-colors">
                  <Swords className="w-5 h-5 text-red-400" />
                </div>
                <span className="font-bold text-slate-200 group-hover:text-red-400 transition-colors">Improve a Pal build</span>
                <ArrowRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-red-400 transition-colors" />
              </Link>
              <Link
                href="/pals"
                className="flex items-center p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors">
                  <LayoutGrid className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Explore all Pals</span>
                <ArrowRight className="w-4 h-4 ml-auto text-slate-600 group-hover:text-emerald-400 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Most Popular Tool */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 font-bold text-sm mb-4">
          🔥 Most Popular Tool
        </div>
        <h2 className="text-3xl font-bold mb-8">Breeding Calculator</h2>

        <HomeBreeding />
      </section>

      {/* 4. Explore Tools */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Palworld Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link
            href="/calculators/breeding-simulator"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dna className="w-6 h-6 text-sky-400" />
            </div>
            <span className="font-bold text-slate-200">Breeding</span>
          </Link>
          <Link
            href="/calculators/damage"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Swords className="w-6 h-6 text-red-400" />
            </div>
            <span className="font-bold text-slate-200">Combat Builds</span>
          </Link>
          <Link
            href="/calculators/base-efficiency"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="font-bold text-slate-200">Base Optimization</span>
          </Link>
          <Link
            href="/pals"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <LayoutGrid className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="font-bold text-slate-200">Paldeck</span>
          </Link>
        </div>

        {/* 5. View All Tools */}
        <div className="text-center mt-8">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 font-medium transition-colors"
          >
            View All Tools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
