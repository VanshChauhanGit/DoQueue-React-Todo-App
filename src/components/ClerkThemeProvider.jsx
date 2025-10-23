import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { useTheme } from "../contexts/ThemeContext";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const ClerkThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: "hsl(var(--primary))",
          colorBackground: "hsl(var(--card))",
          colorText: "hsl(var(--foreground))",
          colorInputBackground: "hsl(var(--input))",
          colorInputText: "hsl(var(--foreground))",
          colorTextOnPrimaryBackground: "hsl(var(--primary-foreground))",
          borderRadius: "10px",
        },
        elements: {
          card: "bg-card border border-border shadow-xl",
          formButtonPrimary:
            "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring",
          socialButtonsBlockButton:
            "border-border hover:bg-accent focus-visible:ring-ring",
          footerActionLink: "text-primary hover:underline",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          dividerLine: "bg-border",
          dividerText: "text-muted-foreground",
          formFieldLabel: "text-foreground",
          formFieldInput:
            "bg-background border-input ring-offset-background focus-visible:ring-ring",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkThemeProvider;
