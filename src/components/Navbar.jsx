



export default function Navbar() {
  return (
    <nav className="fixed z-50 w-screen text-white flex justify-between items-center py-6 px-20 backdrop-blur-xs">
      <div>
        <img src="/logo.svg" alt="logo" className="invert-100" />
      </div>
      <div className="flex gap-6">
        {['Services', 'Our work', 'About us', 'Insights', 'Contact Us'].map((item, i) => {
          return (
            <a
              key={i}
              href={`#${item.toLowerCase().replaceAll(" ", "")}`}
              className={`text-lg font-light ${i === 4 && "ml-[333px]"}`}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  )
}
