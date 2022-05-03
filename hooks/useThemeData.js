import React, { useState, useEffect } from 'react'
import { fetchThemeContentRequest } from '../services/theme'

function useThemeData() {
    const [homePageId, setHomePageId] = useState(null)
    const [homePageData, setHomePageData] = useState(null)
    useEffect(() => {
        getThemeRelatedData()
    }, [])
    const getThemeRelatedData = async () => {
        const res = await fetchThemeContentRequest()
        if(!res.api_error){
            setHomePageData(res?.api_data?.data[0])
            setHomePageId(res?.api_data?.data[0]._id)
        }
    }
  return {
    homePageData,
    homePageId,

    getThemeRelatedData
  }
}

export default useThemeData