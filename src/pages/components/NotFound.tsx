import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { OctagonX } from "lucide-react";
import React from "react";

export default function NoBook({addBook}: boolean) {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-90">
      <Card className="flex flex-col Justify-center items-center w-1/2">
        <CardHeader>
          <CardTitle className="text-2xl">404 Not found</CardTitle>
        </CardHeader>
        <CardContent>
          <OctagonX className="h-16 w-16 text-muted-foreground" />
        </CardContent>
        <CardFooter>
          {
            addBook && <Button>Add Book</Button>
          }
        </CardFooter>
      </Card>
    </div>
  );
}
