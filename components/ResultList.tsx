


import Image from "next/image";
import { ScrollArea } from "./ui/scroll-area";


export function ResultList({ items, result }: any) {
  let output = items
  console.log(result.locationAuto)
  if (result.locationAuto == false && result.BudgetAuto == false) {
    output = items.filter((lc: any) => lc.id === result.location);
  }
  else if ((result.locationAuto == false)) {
    output = items.filter((lc: any) => lc.id === result.location);
  }
  
  else if ((result.BudgetAuto==false)) {
    output = items.filter((lc: any) => lc.AverageBudget <= result.budget);
  }

  return (
    <ScrollArea className="h-[80vh]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {output.map((item: any) => (
          <button
            key={item.id}
            className={
              "flex flex-col items-start justify-center gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
            }
          >
            <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={300}
              className="aspect-[4/3] h-fit w-full items-center object-cover"
            />
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                </div>
              </div>
              <div className="text-xs font-medium">{item.state}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.description.substring(0, 300)}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

// function getBadgeVariantFromLabel(
//   label: string
// ): ComponentProps<typeof Badge>["variant"] {
//   if (["work"].includes(label.toLowerCase())) {
//     return "default";
//   }

//   if (["personal"].includes(label.toLowerCase())) {
//     return "outline";
//   }

//   return "secondary";
// }
