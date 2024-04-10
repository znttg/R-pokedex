import pokeLogo from './../assets/Pokedex_logo.svg'

export function Header() {
  return (
    <div className="">
      <img
        src={pokeLogo}
        className="absolute m-auto left-0 right-0 top-0 bottom-96 h-80"
        alt="Pokedex logo"
      />
    </div>
  )
}
