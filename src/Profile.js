import React, { useState, useEffect } from 'react'
import scriptLoader from 'react-async-script-loader'
let liff = ''
let profile = {
  userId: '',
  displayName: '',
  pictureUrl: 'https://via.placeholder.com/150',
  statusMessage: 'statusMessage'
}

function onInit (isSuccess = false, setAlreadyGetProfile, setStage) {
  if (isSuccess) {
    liff.getProfile()
    .then((data) => {
      Object.keys(profile).forEach(key => {
        profile[key] = data[key]
      })
      setAlreadyGetProfile(isSuccess)
      setStage('success: getProfile')
    })
    .catch((err) => {
      setStage('error: getProfile')
      setAlreadyGetProfile(!isSuccess)
    })
  } else {
    setStage('error: on init')
    setAlreadyGetProfile(isSuccess)
  }
}

function Profile(props) {
  const [ alreadyGetProfile, setAlreadyGetProfile ] = useState(false)
  const [ stage, setStage ] = useState('LOADING...')

  useEffect(
    () => {
      if (props.isScriptLoaded && props.isScriptLoadSucceed) {
        setStage('sdk isScriptLoadSucceed')
        liff = window.liff
        liff.init(
          () => onInit(true, setAlreadyGetProfile, setStage),
          () => onInit(false, setAlreadyGetProfile, setStage)
        )
      } else {
        setAlreadyGetProfile(false)
        setStage('sdk fail')
      }
    }, [props.isScriptLoaded, props.isScriptLoadSucceed]
  )

  return (
    <div className="section isProfile">
      <div className="profileImage"><img src={profile.pictureUrl} alt=""/></div>
      {
        alreadyGetProfile &&
        <div className="caption">
          <div className="txtHL1"><b>HI!</b> {profile.displayName}</div>
          <div className="txtHL3">USER ID: {profile.userId}</div>
        </div>
      }
      <div className="txtHL3"><small>{stage}</small></div>
    </div>
  )
}

export default scriptLoader(
  'https://d.line-scdn.net/liff/1.0/sdk.js'
)(Profile)
