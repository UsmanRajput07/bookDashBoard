import react from "react";
export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="border rounded-xl bg-muted/50 min-w-[400px] max-w-[100%] h-[300px]" />
        <div className="border rounded-xl bg-muted/50 min-w-[400px] max-w-[100%] h-[300px]" />
        <div className="border rounded-xl bg-muted/50 min-w-[400px] max-w-[100%] h-[300px]" />
      </div>
      <div className="rounded-xl bg-muted/50 w-[100%] h-[300px]" />
    </div>
  );
}
