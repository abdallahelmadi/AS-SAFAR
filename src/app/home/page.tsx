import Header from "@/components/header"
import { Roboto_Mono } from "next/font/google"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "as-safar"
}

const font = Roboto_Mono({ subsets: ["latin"], display: "swap" })

export default function Home(): React.JSX.Element {
    return (
      <>
        <Header/>
        <div className="pt-16 sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">

          <h2 className={`font-[400] text-[30px] leading-[36px] ${font.className} tracking-tighter md:text-[36px] md:leading-[40px]`}>
            Tell us your travel preferences 🏕️🌴
          </h2>
               
          <p className="mt-2 text-gray-700 text-[15px] max-w-[92%] md:max-w-[75%] lg:max-w-[64%]">
            Pick a few options that suit your style, and our smart planner will build the perfect plan for you in seconds
          </p>
               
               
               
               
               {/* <div className="mt-20 flex flex-col gap-10"><div><h2 className="text-xl my-3 font-medium">What is destination of choice?</h2><div className=" css-b62m3t-container"><span id="react-select-2-live-region" className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" className="css-7pg0cj-a11yText"></span><div className=" css-13cymwt-control"><div className=" css-hlgwow"><div className=" css-1jqq78o-placeholder" id="react-select-2-placeholder">Select...</div><div className=" css-19bb58m" data-value=""><input className=""
               autoCapitalize="none" autoComplete="off" autoCorrect="off" id="react-select-2-input" spellCheck="false" tabIndex={0} type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" aria-describedby="react-select-2-placeholder" value="" /></div></div><div className=" css-1wy0on6"><span className=" css-1u9des2-indicatorSeparator"></span><div className=" css-1xc3v61-indicatorContainer" aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-8mmkcg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div></div></div></div></div><div><h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2><input type="number" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Ex.3" /></div><div><h2 className="text-xl my-3 font-medium">What is Your Budget?</h2><div className="grid grid-cols-3 gap-5 mt-5"><div className="p-4 border cursor-pointer 
               rounded-lg hover:shadow-lg
               false
               "><h2 className="text-4xl">💵</h2><h2 className="font-bold text-lg">Cheap</h2><h2 className="text-sm text-gray-500">Stay conscious of costs</h2></div><div className="p-4 border cursor-pointer 
               rounded-lg hover:shadow-lg
               false
               "><h2 className="text-4xl">💰</h2><h2 className="font-bold text-lg">Moderate</h2><h2 className="text-sm text-gray-500">Keep cost on the average side</h2></div><div className="p-4 border cursor-pointer 
               rounded-lg hover:shadow-lg
               false
               "><h2 className="text-4xl">💸</h2><h2 className="font-bold text-lg">Luxury</h2><h2 className="text-sm text-gray-500">Dont worry about cost</h2></div></div></div><div><h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2><div className="grid grid-cols-3 gap-5 mt-5"><div className="p-4 border cursor-pointer rounded-lg
               hover:shadow-lg
               false
               "><h2 className="text-4xl">✈️</h2><h2 className="font-bold text-lg">Just Me</h2><h2 className="text-sm text-gray-500">A sole traveles in exploration</h2></div><div className="p-4 border cursor-pointer rounded-lg
               hover:shadow-lg
               false
               "><h2 className="text-4xl">🥂</h2><h2 className="font-bold text-lg">A Couple</h2><h2 className="text-sm text-gray-500">Two traveles in tandem</h2></div><div className="p-4 border cursor-pointer rounded-lg
               hover:shadow-lg
               false
               "><h2 className="text-4xl">🏡</h2><h2 className="font-bold text-lg">Family</h2><h2 className="text-sm text-gray-500">A group of fun loving adv</h2></div><div className="p-4 border cursor-pointer rounded-lg
               hover:shadow-lg
               false
               "><h2 className="text-4xl">⛵</h2><h2 className="font-bold text-lg">Friends</h2><h2 className="text-sm text-gray-500">A bunch of thrill-seekes</h2></div></div></div></div><div className="my-10 justify-end flex"><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">Generate Trip</button></div> */}




        </div>
      </>
    )
}