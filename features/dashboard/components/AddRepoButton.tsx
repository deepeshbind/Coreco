import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const AddRepoButton = () => {
  return (
    <div  
        className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer"
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
            <h1 className="text-xl font-bold text-foreground">Add Repo</h1>
            <p className="text-sm text-muted-foreground max-w-[220px]">Open a new Repository</p>
          </div>
        </div>
      </div>
  )
}

export default AddRepoButton