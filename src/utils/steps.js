import {
    MapPin,
    Trash2,
    Package,
    CheckCircle2,
    Calendar,
    CreditCard,
} from "lucide-react";

export const stepperSteps = [
    { key: "postcode", label: "Postcode", icon: <MapPin className="w-5 h-5" /> },
    { key: "waste", label: "Waste Type", icon: <Trash2 className="w-5 h-5" /> },
    { key: "skip", label: "Select Skip", icon: <Package className="w-5 h-5" /> },
    { key: "permit", label: "Permit Check", icon: <CheckCircle2 className="w-5 h-5" /> },
    { key: "date", label: "Choose Date", icon: <Calendar className="w-5 h-5" /> },
    { key: "payment", label: "Payment", icon: <CreditCard className="w-5 h-5" /> },
];