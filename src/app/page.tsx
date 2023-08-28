'use client'
import LeadForm from "@/components/LeadForm";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function Home() {
  return (
    <div className="flex justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>

    <LeadForm />
    
    </LocalizationProvider>
    </div>
  );
}
