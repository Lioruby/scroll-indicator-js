const initTopBottomStyle = (progressBar, data) => {
  progressBar.style.width = '0%'
  data.reverse ? progressBar.style.right = 0 : progressBar.style.left = 0
  progressBar.style.height = data.style.height
}

const initLeftRightStyle = (progressBar, data) => {
  progressBar.style.height = '0%'
  data.reverse ? progressBar.style.bottom = '0' : progressBar.style.top = '0'
  progressBar.style.width = data.style.height
}

const initProgressBarPosition = (progressBar, data) => {
  switch (data.style.position) {
    case 'top':
      initTopBottomStyle(progressBar, data)
      progressBar.style.top = '0'
      break;
    case 'bottom':
      initTopBottomStyle(progressBar, data)
      progressBar.style.bottom = '0'
      break;
    case 'left':
      initLeftRightStyle(progressBar, data)
      progressBar.style.left = '0'
      break;
    case 'right':
      initLeftRightStyle(progressBar, data)
      progressBar.style.right = '0'
      break;
    default:
      initTopBottomStyle(progressBar, data)
      progressBar.style.top = '0'
      break;
  }
}

const initProgressBar = (progressBar, data) => {
  progressBar.style.backgroundImage = data.style.color
  progressBar.style.backgroundColor = data.style.color
  progressBar.style.position = 'fixed'
  progressBar.style.zIndex = 999
  initProgressBarPosition(progressBar, data)
}

const scrollPercent = () => {
  const docElem = document.documentElement
  const docBody = document.body
  const scrollTop = docElem.scrollTop || docBody.scrollTop
  const scrollBottom = (docElem.scrollHeight || docBody.scrollHeight) - window.innerHeight
  return scrollTop / scrollBottom * 100 + '%'
}

const activeScrollIndicator = (progressBar) => {
  if(['left', 'right'].includes(progressBar.dataset.position)) {
    progressBar.style.height = scrollPercent()
  } else {
    progressBar.style.width = scrollPercent()
  }
}

const scrollIndicator = () => {
  const progressBars = document.querySelectorAll('.scroll-indicator')

  if(progressBars.length === 0)
    return

  progressBars.forEach((progressBar) => {
    const data = {
      style: {
        height: progressBar.dataset.height || '3px',
        color: progressBar.dataset.color || 'linear-gradient(225deg,#ffb938 0%,#ff5729 100%)',
        position: progressBar.dataset.position || 'top',
      },
      reverse: (progressBar.dataset.reverse === 'true')
    }
    
    initProgressBar(progressBar, data)
    window.addEventListener('scroll', () => {
      activeScrollIndicator(progressBar)
    })
  })
}

module.exports = scrollIndicator
