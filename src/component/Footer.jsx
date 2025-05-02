import React from 'react'

const Footer = () => {
  const footNav = [
    {title:"Company",
      links:["About","Jobs","For The Records"]
    },
    {
      title:"Communities",
      links:["For Artist","Developer","Advertising","Investors","Vendors"]
    },
    {
      title:"Useful links",
      links:["Support","Free Mobile App","Popular by Country"]
    },
    {
      title:"Spotify Plans",
      links:["Premium Individual","Premium Duo","Premium Family",
        "Premium Student","Spotify Free"]
    }
]

const social =["instagra","faceboo","linkedin"]
  return (
    <footer className="bg-black text-white p-8 mt-10">
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
      {footNav.map((section, index) => (
        <div key={index}>
          <h4 className="font-bold mb-3">{section.title}</h4>
          <ul className="space-y-2">
            {section.links.map((link, idx) => (
              <li key={idx} className="text-sm hover:underline cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex gap-4">
  {social.map((link, index) => (
    <button key={index} className="hover:text-green-400 transition">{link}</button>
  ))}
</div>

    </div>
  </footer>
  )
}

export default Footer