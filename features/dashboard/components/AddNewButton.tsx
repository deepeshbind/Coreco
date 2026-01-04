"use client";
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react"
import { toast } from "sonner";
import { createPlayground } from "../actions";
import TemplateSelectionModal from "./template-selection-modal";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<{
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  } | null>(null)
  const router = useRouter()

  const handleSubmit = async(data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    setSelectedTemplate(data)
    // @ts-ignore
    const res = await createPlayground(data);
    toast("Playground created successfully");
    // Here you would typically handle the creation of a new playground
    // with the selected template data
    console.log("Creating new playground:", data)
    setIsModalOpen(false)
    router.push(`/playground/${res?.id}`)
  }

  return (
    <>
      <div  
        className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex flex-row justify-center items-start gap-4">
          <Button
            variant="accent"
            className="flex justify-center items-center bg-foreground group-hover:bg-[#fff8f8] group-hover:border-[#4f616d] group-hover:text-[#4f616d] transition-colors duration-300"
            size={"icon"}
          >
            <Plus size={30} className="transition-transform duration-300 group-hover:rotate-90" />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-foreground">Add New</h1>
            <p className="text-sm text-muted-foreground max-w-[220px]">Create a new playground</p>
          </div>
        </div>
      </div>
      
      <TemplateSelectionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default AddNewButton