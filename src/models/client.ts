export type Client = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  situacao: "pending" | "processing" | "success" | "failed";
  contact: string;
  pricingPlan: {
    name: string;
    companies: number;
    users: number;
    emailTrigger: number;
    apiIntegration: boolean;
    whatsappWarnings: boolean;
    whatsappMessages: number;
    reviews: number;
  };
};
