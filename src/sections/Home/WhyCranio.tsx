import * as React from "react"

import Image from "next/image"
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'
import { JetBrains_Mono} from 'next/font/google'
import { Inter} from 'next/font/google'
  
const jet = JetBrains_Mono({
  weight: ["400","700"],
  subsets: ['latin'],
})
const inter= Inter({
  weight: ["400"],
  subsets: ['latin'],
})

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {

    const items=[
        {title: "Our Mission", description:"We are driven by a mission to revolutionize dementia care through innovation, technology, and compassion.\n\nBy integrating data-driven insights with compassionate care, we aim to make dementia more manageable while preserving dignity at every stage.", image:card1},
        {title: "Innovation-Driven", description:"We leverage AI and cutting-edge technology to provide personalized, effective care solutions for dementia patients.\n\nThrough our platform, CareGPT, we assist healthcare providers with seamless care coordination, enhancing patient outcomes while reducing administrative tasks.", image:card2},
        {title: "Patient-Centered Approach", description:"Every feature of our platform is thoughtfully designed to prioritize patients' well-being and dignity.\n\nBy combining advanced technology with compassionate care, we ensure that each patient's needs are met with respect, promoting a higher quality of life.", image:card3},
        {title: "Collaborative Care", description:"Healthcare professionals can collaborate effortlessly on our platform, streamlining communication and coordination to improve patient outcomes.\n\nThis integrated approach enhances efficiency, ensuring that patients receive timely, well-coordinated care.", image:card4},
    ]
  return (
    <section className="px-16 flex justify-center py-14 items-center flex-col gap-4">
        <h1  className={`${jet.className} font-bold text-black text-3xl text-center`}>Why choose Craniometrix?</h1>
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {items.map(({title,description,image}, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card className=" bg-black/80 rounded-4xl h-[550px] overflow-hidden border-amber-300 border-2">
                <CardContent className="flex flex-col p-0 gap-4 text-white h-full">
                  <div className="flex flex-col h-full justify-between">
                    <div className="px-6 pt-3">
                        <h1 className={`${jet.className} font-bold text-white text-shadow text-2xl`}>{title}</h1> 
                        <p className={`${inter.className} text-white text-md whitespace-pre-line mt-3`}>{description}</p>
                    </div>
                    <div className="mt-10">
                        <Image src={image} alt="image" className="pt-2 rounded-b-3xl"></Image>
                    </div>
                  </div>  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  )
}
