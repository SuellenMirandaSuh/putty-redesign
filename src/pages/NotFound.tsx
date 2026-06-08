import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <PageLayout>
      <div className="flex items-center justify-center py-16">
        <Card className="w-full max-w-lg shadow-lg border bg-card">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
            </div>
            <h1 className="heading-display mb-2">404</h1>
            <h2 className="heading-sm mb-4 text-muted-foreground">Page Not Found</h2>
            <p className="text-body text-muted-foreground mb-8">
              Sorry, the page you are looking for doesn't exist.
            </p>
            <Button onClick={() => setLocation("/")}>
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
