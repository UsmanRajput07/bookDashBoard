export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="border rounded-xl bg-muted/50 h-[200px] w-full sm:h-[200px] md:h-[200px] lg:h-[300px] sm:w-full md:w-[200px] lg:w-[300px]"
          />
        ))}
      </div>
      <div className="rounded-xl bg-muted/50 w-full h-[200px] sm:h-[200px] md:h-[200px] lg:h-[300px]" />
    </div>
  );
}

