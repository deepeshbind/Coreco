import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Keep this if you use it inside this file, otherwise remove

export default function Home() {
  return (
    <div className="flex flex-1 flex-col rounded-2xl border border-primary/10 items-center justify-center">
      <div>
        <div className="z-10 flex items-center justify-center py-8">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1">
              <span>✨ AI Coming Soon</span>
              <ArrowRightIcon className="size-3 ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        <div className="font-extrabold dark:font-bold tracking-tighter text-transparent bg-gradient-to-br from-neutral-500 via-neutral-700 to-neutral-800 dark:from-neutral-600 dark:via-neutral-100 dark:to-white bg-clip-text text-4xl lg:text-[50px] leading-[1.1] text-center text-balance">
          Coreco - AI-Powered Web IDE
        </div>
        <div className="text-neutral-700/80 dark:text-neutral-400/60 font-[450] text-center text-lg md:text-xl max-w-md mx-auto py-4 text-balance leading-[1.5]">
          Coreco is a fullstack, web-based IDE built with Next.js and Monaco
          Editor. It features real-time code execution using WebContainers,
          AI-powered code suggestions via locally running Ollama models,
          multi-stack templates, an integrated terminal, and a developer-focused
          UI for seamless coding in the browser.
        </div>
      </div>
      <div className="py-8 flex justify-center">
        <Link href={"/dashboard"}>
          <Button variant="accent" className="mb-4 max-w-30" size={"lg"}>
            Get Started
            <ArrowUpRight className="size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
