import { FadeLoader } from 'react-spinners'

type LoadingType = {
  transparent:boolean
}

const Loading = ({transparent}:LoadingType) => {
  return (
    <div className={`flex justify-center items-center h-screen  ${transparent&& 'bg-transparent'} `}>
        <FadeLoader color="#002F34" />
      </div>
  )
}

export default Loading
