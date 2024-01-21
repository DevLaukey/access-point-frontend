import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Gate A</p>
          <p className="text-sm text-muted-foreground">
            Entry point manager:
          </p>
        </div>
        <div className="ml-auto font-medium">10 <span className="font-small">visitors</span> </div>
      </div>
  
    </div>
  );
}