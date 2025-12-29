
const Card = () => {
  return (
    <div className="w-[20%] rounded-xl shadow-xl p-2">
        <div className="card-img w-full h-[130px]">
            <img src="/images/nike.png" alt="nike shoes" className="w-full h-full" />
        </div>
        <div className="details text-2xl">
            <p className="title font-bold">nike shoes</p>
            <p className="price text-green-500">560$</p>
        </div>

    </div>
  )
}

export default Card