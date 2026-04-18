import Link from "next/link";
import { HomeSearch } from "../components/home/HomeSearch";
import { HomeBreeding } from "../components/home/HomeBreeding";
import { Dna, Calculator, Swords, Target, LayoutGrid, ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 space-y-24">
      {/* 1. Hero Section (Split Layout) */}
      <section className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            🔥 Find the Best Pals, Breeding Combos & Builds
          </h1>

          <div className="py-2">
            <HomeSearch />
            <div className="text-slate-400 font-medium text-sm mt-4 lg:ml-2">
              <span className="inline-block px-3 py-1 bg-slate-900 rounded-full border border-slate-800">OR</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link
              href="/calculators/breeding-simulator"
              className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-5 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Dna className="w-5 h-5 text-sky-400" />
              Breeding Calculator
            </Link>
            <Link
              href="/calculators/iv"
              className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-5 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <Calculator className="w-5 h-5 text-purple-400" />
              IV Calculator
            </Link>
            <Link
              href="/pals"
              className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 hover:border-sky-500 hover:bg-slate-800 text-slate-100 px-5 py-3 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1"
            >
              <LayoutGrid className="w-5 h-5 text-emerald-400" />
              Explore Pals
            </Link>
          </div>

          <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
            Optimize your Palworld gameplay in seconds
          </p>
        </div>

        {/* Right Side: Image Banner */}
        <div className="hidden lg:block w-[40%] relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50">
          <Image
            src="/images/hero-pal.jpg"
            alt="Palworld Gameplay"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient overlay to blend seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent" />
        </div>
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
                <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center mr-4 group-hover:bg-sky-500/20 transition-colors shrink-0">
                  <Dna className="w-6 h-6 text-sky-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-slate-200 group-hover:text-sky-400 transition-colors">Start breeding</span>
                  <span className="text-sm text-slate-400">Find the best combo</span>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-slate-600 group-hover:text-sky-400 transition-colors" />
              </Link>
              <Link
                href="/calculators/damage"
                className="flex items-center p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-red-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mr-4 group-hover:bg-red-500/20 transition-colors shrink-0">
                  <Swords className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-slate-200 group-hover:text-red-400 transition-colors">Optimize a Pal</span>
                  <span className="text-sm text-slate-400">Damage & stats tools</span>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-slate-600 group-hover:text-red-400 transition-colors" />
              </Link>
              <Link
                href="/pals"
                className="flex items-center p-4 bg-slate-900 border border-slate-700 rounded-xl hover:border-emerald-500/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mr-4 group-hover:bg-emerald-500/20 transition-colors shrink-0">
                  <LayoutGrid className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Explore the Paldeck</span>
                  <span className="text-sm text-slate-400">Browse all Pals</span>
                </div>
                <ArrowRight className="w-5 h-5 ml-auto text-slate-600 group-hover:text-emerald-400 transition-colors" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Link
            href="/calculators/breeding-simulator"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dna className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <span className="block font-bold text-slate-200 mb-1">Breeding</span>
              <span className="block text-xs text-slate-400 px-2">Find the best parent combos</span>
            </div>
          </Link>
          <Link
            href="/calculators/damage"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-red-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Swords className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <span className="block font-bold text-slate-200 mb-1">Combat Builds</span>
              <span className="block text-xs text-slate-400 px-2">Improve damage and team strength</span>
            </div>
          </Link>
          <Link
            href="/calculators/base-efficiency"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-yellow-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <span className="block font-bold text-slate-200 mb-1">Base Optimization</span>
              <span className="block text-xs text-slate-400 px-2">Improve work speed and efficiency</span>
            </div>
          </Link>
          <Link
            href="/pals"
            className="flex flex-col items-center p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-500/50 transition-colors group text-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <LayoutGrid className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="block font-bold text-slate-200 mb-1">Paldeck</span>
              <span className="block text-xs text-slate-400 px-2">Browse stats, traits, and details</span>
            </div>
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
