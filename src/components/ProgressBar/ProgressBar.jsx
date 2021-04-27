const ProgressBar = ({ progress }) => {
  const widthPercent = `${progress}%`
  return (
    <>
      <div className='progress-bar' style={{ width: widthPercent }}></div>
    </>
  )
}

export default ProgressBar
