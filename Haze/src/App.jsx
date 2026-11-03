import { useEffect, useState } from 'react'
import './App.css'

const countryOverview = ['Indonesia', 'Malaysia', 'Philippines', 'Thailand'].map((name) => ({ name }))

const malaysiaCities = [
  { id: 'alor-setar', name: 'Alor Setar', state: 'Kedah', latitude: 6.1248, longitude: 100.3678 },
  { id: 'george-town', name: 'George Town', state: 'Penang', latitude: 5.4141, longitude: 100.3288 },
  { id: 'ipoh', name: 'Ipoh', state: 'Perak', latitude: 4.5975, longitude: 101.0901 },
  { id: 'johor-bahru', name: 'Johor Bahru', state: 'Johor', latitude: 1.4927, longitude: 103.7414 },
  { id: 'kota-bharu', name: 'Kota Bharu', state: 'Kelantan', latitude: 6.1254, longitude: 102.2381 },
  { id: 'kota-kinabalu', name: 'Kota Kinabalu', state: 'Sabah', latitude: 5.9804, longitude: 116.0735 },
  { id: 'kuala-lumpur', name: 'Kuala Lumpur', state: 'Federal Territory', latitude: 3.139, longitude: 101.6869 },
  { id: 'kuala-terengganu', name: 'Kuala Terengganu', state: 'Terengganu', latitude: 5.3302, longitude: 103.1408 },
  { id: 'kuantan', name: 'Kuantan', state: 'Pahang', latitude: 3.8077, longitude: 103.326 },
  { id: 'kuching', name: 'Kuching', state: 'Sarawak', latitude: 1.5533, longitude: 110.3592 },
  { id: 'labuan', name: 'Labuan', state: 'Federal Territory', latitude: 5.2831, longitude: 115.2308 },
  { id: 'kangar', name: 'Kangar', state: 'Perlis', latitude: 6.4414, longitude: 100.1986 },
  { id: 'melaka-city', name: 'Melaka City', state: 'Melaka', latitude: 2.1896, longitude: 102.2501 },
  { id: 'miri', name: 'Miri', state: 'Sarawak', latitude: 4.3995, longitude: 113.9914 },
  { id: 'petaling-jaya', name: 'Petaling Jaya', state: 'Selangor', latitude: 3.1073, longitude: 101.6067 },
  { id: 'putrajaya', name: 'Putrajaya', state: 'Federal Territory', latitude: 2.9264, longitude: 101.6964 },
  { id: 'sandakan', name: 'Sandakan', state: 'Sabah', latitude: 5.8402, longitude: 118.1179 },
  { id: 'seremban', name: 'Seremban', state: 'Negeri Sembilan', latitude: 2.7297, longitude: 101.9381 },
  { id: 'shah-alam', name: 'Shah Alam', state: 'Selangor', latitude: 3.0733, longitude: 101.5185 },
  { id: 'sibu', name: 'Sibu', state: 'Sarawak', latitude: 2.2876, longitude: 111.8305 },
  { id: 'tawau', name: 'Tawau', state: 'Sabah', latitude: 4.2448, longitude: 117.8912 },
]

const citiesByCountry = {
  Malaysia: malaysiaCities,
  Thailand: [
    { id: 'bangkok-th', name: 'Bangkok', state: 'Bangkok', latitude: 13.7563, longitude: 100.5018 },
    { id: 'chiang-mai', name: 'Chiang Mai', state: 'Chiang Mai', latitude: 18.7883, longitude: 98.9853 },
    { id: 'chiang-rai', name: 'Chiang Rai', state: 'Chiang Rai', latitude: 19.9105, longitude: 99.8406 },
    { id: 'hat-yai', name: 'Hat Yai', state: 'Songkhla', latitude: 7.0084, longitude: 100.4747 },
    { id: 'khon-kaen', name: 'Khon Kaen', state: 'Khon Kaen', latitude: 16.4419, longitude: 102.835 },
    { id: 'nakhon-ratchasima', name: 'Nakhon Ratchasima', state: 'Nakhon Ratchasima', latitude: 14.9799, longitude: 102.0977 },
    { id: 'pattaya', name: 'Pattaya', state: 'Chonburi', latitude: 12.9236, longitude: 100.8825 },
    { id: 'phuket', name: 'Phuket', state: 'Phuket', latitude: 7.8804, longitude: 98.3923 },
    { id: 'surat-thani', name: 'Surat Thani', state: 'Surat Thani', latitude: 9.1394, longitude: 99.3217 },
    { id: 'udon-thani', name: 'Udon Thani', state: 'Udon Thani', latitude: 17.4138, longitude: 102.787 },
  ],
  Indonesia: [
    { id: 'jakarta-id', name: 'Jakarta', state: 'Jakarta', latitude: -6.2088, longitude: 106.8456 },
    { id: 'bandung', name: 'Bandung', state: 'West Java', latitude: -6.9175, longitude: 107.6191 },
    { id: 'bali-denpasar', name: 'Denpasar', state: 'Bali', latitude: -8.65, longitude: 115.2167 },
    { id: 'yogyakarta', name: 'Yogyakarta', state: 'Special Region of Yogyakarta', latitude: -7.7956, longitude: 110.3695 },
    { id: 'makassar', name: 'Makassar', state: 'South Sulawesi', latitude: -5.1477, longitude: 119.4327 },
    { id: 'malang', name: 'Malang', state: 'East Java', latitude: -7.9666, longitude: 112.6326 },
    { id: 'medan', name: 'Medan', state: 'North Sumatra', latitude: 3.5952, longitude: 98.6722 },
    { id: 'palembang', name: 'Palembang', state: 'South Sumatra', latitude: -2.9761, longitude: 104.7754 },
    { id: 'pekanbaru', name: 'Pekanbaru', state: 'Riau', latitude: 0.5071, longitude: 101.4478 },
    { id: 'semarang', name: 'Semarang', state: 'Central Java', latitude: -6.9667, longitude: 110.4167 },
    { id: 'surabaya', name: 'Surabaya', state: 'East Java', latitude: -7.2575, longitude: 112.7521 },
  ],
  Philippines: [
    { id: 'manila-ph', name: 'Manila', state: 'Metro Manila', latitude: 14.5995, longitude: 120.9842 },
    { id: 'bacolod', name: 'Bacolod', state: 'Negros Occidental', latitude: 10.6765, longitude: 122.9509 },
    { id: 'baguio', name: 'Baguio', state: 'Benguet', latitude: 16.4023, longitude: 120.596 },
    { id: 'cagayan-de-oro', name: 'Cagayan de Oro', state: 'Misamis Oriental', latitude: 8.4542, longitude: 124.6319 },
    { id: 'cebu', name: 'Cebu City', state: 'Cebu', latitude: 10.3157, longitude: 123.8854 },
    { id: 'davao', name: 'Davao City', state: 'Davao Region', latitude: 7.1907, longitude: 125.4553 },
    { id: 'iloilo', name: 'Iloilo City', state: 'Iloilo', latitude: 10.7202, longitude: 122.5621 },
    { id: 'puerto-princesa', name: 'Puerto Princesa', state: 'Palawan', latitude: 9.7392, longitude: 118.7353 },
    { id: 'quezon-city', name: 'Quezon City', state: 'Metro Manila', latitude: 14.676, longitude: 121.0437 },
    { id: 'zamboanga', name: 'Zamboanga City', state: 'Zamboanga Peninsula', latitude: 6.9214, longitude: 122.079 },
  ],
}

const assessAqi = (aqi) => {
  if (aqi <= 50) return { category: 'Good', health: 'Healthy', tone: 'good' }
  if (aqi <= 100) return { category: 'Moderate', health: 'Generally acceptable', tone: 'moderate' }
  if (aqi <= 150) return { category: 'Unhealthy for sensitive groups', health: 'Unhealthy', tone: 'sensitive' }
  if (aqi <= 200) return { category: 'Unhealthy', health: 'Unhealthy', tone: 'unhealthy' }
  if (aqi <= 300) return { category: 'Very unhealthy', health: 'Unhealthy', tone: 'very-unhealthy' }
  return { category: 'Hazardous', health: 'Unhealthy', tone: 'hazardous' }
}

const parseTrendTimestamp = (time) => Date.parse(`${time}:00Z`)

const trendPeriods = ['24H', '7D', '30D']

const today = new Intl.DateTimeFormat('en', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
}).format(new Date())

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></>,
    radar: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><path d="M12 12 18.3 5.7" /><circle cx="12" cy="12" r="1" /></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z" /><path d="M9 3v15m6-12v15" /></>,
    chart: <><path d="M4 19V5m0 14h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
    gauge: <><path d="M4.5 19a9 9 0 1 1 15 0M4.5 19h15" /><path d="m12 14 4-5" /><circle cx="12" cy="14" r="1" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.9l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.1a7 7 0 0 1-.1 1.8Z" transform="translate(-1 -1) scale(1.08)" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    wind: <><path d="M3 8h12a3 3 0 1 0-3-3" /><path d="M2 12h17a2.5 2.5 0 1 1-2.5 2.5" /><path d="M4 16h7a2 2 0 1 1-2 2" /></>,
    eye: <><path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" /><circle cx="12" cy="12" r="2.5" /></>,
    warning: <><path d="M10.3 3.9 2.1 18a2 2 0 0 0 1.7 3h16.4a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4m0 4h.01" /></>,
    droplets: <><path d="M12 3c-2.5 3.5-6 7.1-6 11a6 6 0 0 0 12 0c0-3.9-3.5-7.5-6-11Z" /><path d="M9 15a3 3 0 0 0 3 3" /></>,
    buildings: <><path d="M2 21h20M3 21V11h5v10M9 21V4h6v17M16 21V8h5v13" /><path d="M5 14v.01M5 17v.01M11 7v.01M13 7v.01M11 10v.01M13 10v.01M11 13v.01M13 13v.01M11 16v.01M13 16v.01M18 11v.01M18 14v.01M18 17v.01" /></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function App() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [selectedCountry, setSelectedCountry] = useState('Malaysia')
  const [period, setPeriod] = useState('24H')
  const [unhealthyBadgeEnabled, setUnhealthyBadgeEnabled] = useState(false)
  const [compactUnits, setCompactUnits] = useState(false)
  const [cityReadings, setCityReadings] = useState({})
  const [cityReadingsLoading, setCityReadingsLoading] = useState(true)
  const [trendResults, setTrendResults] = useState({})
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [profileEditing, setProfileEditing] = useState(false)
  const [profile, setProfile] = useState({ name: 'Rafa Naufal', role: 'Field analyst' })
  const [profileDraft, setProfileDraft] = useState(profile)

  useEffect(() => {
    if (activeNav !== 'Trends') return undefined
    let active = true

    const loadCountryTrend = async () => {
      setTrendResults((current) => ({
        ...current,
        [selectedCountry]: { status: 'loading', series: [] },
      }))

      try {
        const cities = citiesByCountry[selectedCountry]
        const params = new URLSearchParams({
          latitude: cities.map((city) => city.latitude).join(','),
          longitude: cities.map((city) => city.longitude).join(','),
          hourly: 'us_aqi',
          past_days: '30',
          forecast_days: '0',
          timezone: 'UTC',
        })
        const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${params}`)
        if (!response.ok) {
          throw new Error(`Historical AQI request failed (${response.status})`)
        }

        const payload = await response.json()
        const locations = Array.isArray(payload) ? payload : [payload]
        const hourlyTotals = new Map()

        locations.forEach((location) => {
          const times = location.hourly?.time ?? []
          const values = location.hourly?.us_aqi ?? []
          times.forEach((time, index) => {
            const value = values[index]
            if (!Number.isFinite(value)) return
            const total = hourlyTotals.get(time) ?? { sum: 0, count: 0 }
            total.sum += value
            total.count += 1
            hourlyTotals.set(time, total)
          })
        })

        const series = [...hourlyTotals.entries()]
          .map(([time, { sum, count }]) => ({ time, value: Math.round(sum / count) }))
          .sort((left, right) => left.time.localeCompare(right.time))

        if (!series.length) throw new Error('No historical AQI readings are available for this country.')
        if (active) {
          setTrendResults((current) => ({
            ...current,
            [selectedCountry]: { status: 'ready', series },
          }))
        }
      } catch (error) {
        if (active) {
          setTrendResults((current) => ({
            ...current,
            [selectedCountry]: { status: 'error', series: [], error: error.message },
          }))
        }
      }
    }

    loadCountryTrend()
    return () => {
      active = false
    }
  }, [activeNav, selectedCountry])

  useEffect(() => {
    let active = true

    const loadCityReadings = async () => {
      const results = await Promise.allSettled(
        Object.entries(citiesByCountry).map(async ([country, cities]) => {
          const params = new URLSearchParams({
            latitude: cities.map((city) => city.latitude).join(','),
            longitude: cities.map((city) => city.longitude).join(','),
            current: 'us_aqi,pm2_5',
            timezone: 'auto',
          })
          const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?${params}`)

          if (!response.ok) {
            throw new Error(`Air-quality request failed for ${country} (${response.status})`)
          }

          const payload = await response.json()
          const locations = Array.isArray(payload) ? payload : [payload]
          return cities.map((city, index) => {
            const current = locations[index]?.current
            const aqi = current?.us_aqi
            const pm25 = current?.pm2_5
            return [city.id, {
              aqi: Number.isFinite(aqi) ? aqi : null,
              pm25: Number.isFinite(pm25) ? pm25 : null,
              time: current?.time ?? null,
              error: Number.isFinite(aqi) ? null : `No current AQI reading returned for ${city.name}`,
            }]
          })
        })
      )

      if (!active) return

      const readings = Object.fromEntries(results.flatMap((result, index) => {
        const [country, cities] = Object.entries(citiesByCountry)[index]
        if (result.status === 'fulfilled') return result.value
        return cities.map((city) => [
          city.id,
          { aqi: null, pm25: null, time: null, error: `${country} data unavailable: ${result.reason.message}` },
        ])
      }))
      setCityReadings(readings)
      setCityReadingsLoading(false)
    }

    loadCityReadings()
    const refreshInterval = window.setInterval(loadCityReadings, 15 * 60 * 1000)

    return () => {
      active = false
      window.clearInterval(refreshInterval)
    }
  }, [])

  const isOverview = activeNav === 'Overview'
  const selectedCountryCities = citiesByCountry[selectedCountry] ?? []
  const selectedCountryReadings = selectedCountryCities.map((city) => cityReadings[city.id]).filter(Boolean)
  const reportingCountryCityCount = selectedCountryReadings.filter((reading) => Number.isFinite(reading.aqi)).length
  const countryAqiValues = selectedCountryReadings.map((reading) => reading.aqi).filter(Number.isFinite)
  const countryPmValues = selectedCountryReadings.map((reading) => reading.pm25).filter(Number.isFinite)
  const countryAqi = countryAqiValues.length
    ? Math.round(countryAqiValues.reduce((sum, value) => sum + value, 0) / countryAqiValues.length)
    : null
  const countryPm25 = countryPmValues.length
    ? countryPmValues.reduce((sum, value) => sum + value, 0) / countryPmValues.length
    : null
  const selectedTrendResult = trendResults[selectedCountry]
  const trendLoading = activeNav === 'Trends' && (!selectedTrendResult || selectedTrendResult.status === 'loading')
  const trendError = selectedTrendResult?.status === 'error' ? selectedTrendResult.error : ''
  const countryHotspots = selectedCountryCities
    .map((city) => ({ ...city, reading: cityReadings[city.id] }))
    .filter((city) => Number.isFinite(city.reading?.aqi))
    .sort((left, right) => right.reading.aqi - left.reading.aqi)
  const unhealthySelectedCountryCityCount = countryHotspots.filter((city) => city.reading.aqi > 100).length
  const airQualityAlerts = Object.entries(citiesByCountry)
    .flatMap(([country, cities]) => cities
      .filter((city) => Number.isFinite(cityReadings[city.id]?.aqi) && cityReadings[city.id].aqi > 100)
      .map((city) => ({ ...city, country, reading: cityReadings[city.id] })))
    .sort((left, right) => right.reading.aqi - left.reading.aqi)
  const cityLongitudes = selectedCountryCities.map((city) => city.longitude)
  const cityLatitudes = selectedCountryCities.map((city) => city.latitude)
  const longitudeRange = Math.max(...cityLongitudes) - Math.min(...cityLongitudes) || 1
  const latitudeRange = Math.max(...cityLatitudes) - Math.min(...cityLatitudes) || 1
  const countryMapMarkers = countryHotspots.map((city) => ({
    ...city,
    x: 12 + ((city.longitude - Math.min(...cityLongitudes)) / longitudeRange) * 76,
    y: 88 - ((city.latitude - Math.min(...cityLatitudes)) / latitudeRange) * 76,
    assessment: assessAqi(city.reading.aqi),
  }))
  const countrySummaries = countryOverview.map((country) => {
    const cities = citiesByCountry[country.name]
    const readings = cities.map((city) => cityReadings[city.id]?.aqi).filter(Number.isFinite)
    return {
      ...country,
      aqi: readings.length ? Math.round(readings.reduce((sum, aqi) => sum + aqi, 0) / readings.length) : null,
      coverage: `${readings.length} of ${cities.length} cities`,
      loading: cityReadingsLoading,
    }
  })
  const periodHours = period === '24H' ? 24 : period === '7D' ? 24 * 7 : 24 * 30
  const trendSeries = selectedTrendResult?.status === 'ready' ? selectedTrendResult.series : []
  const latestTrendTimestamp = trendSeries.length ? parseTrendTimestamp(trendSeries[trendSeries.length - 1].time) : null
  const latestTrendDate = latestTrendTimestamp === null ? null : new Date(latestTrendTimestamp)
  const trendDayStart = latestTrendDate
    ? Date.UTC(latestTrendDate.getUTCFullYear(), latestTrendDate.getUTCMonth(), latestTrendDate.getUTCDate())
    : null
  const trendMonthStart = latestTrendDate
    ? Date.UTC(latestTrendDate.getUTCFullYear(), latestTrendDate.getUTCMonth(), 1)
    : null
  const trendMonthEnd = latestTrendDate
    ? Date.UTC(latestTrendDate.getUTCFullYear(), latestTrendDate.getUTCMonth(), latestTrendDate.getUTCDate() + 1)
    : null
  const currentWeekStart = latestTrendDate
    ? Date.UTC(
        latestTrendDate.getUTCFullYear(),
        latestTrendDate.getUTCMonth(),
        latestTrendDate.getUTCDate() - ((latestTrendDate.getUTCDay() + 6) % 7),
      )
    : null
  const trendWeekStart = currentWeekStart === null ? 0 : currentWeekStart - 7 * 24 * 60 * 60 * 1000
  const periodStart = period === '7D'
    ? trendWeekStart
    : period === '24H' && trendDayStart !== null
      ? trendDayStart
      : period === '30D' && trendMonthStart !== null
        ? trendMonthStart
      : latestTrendTimestamp ? latestTrendTimestamp - periodHours * 60 * 60 * 1000 : 0
  const filteredTrendSeries = trendSeries.filter((point) => {
    const timestamp = parseTrendTimestamp(point.time)
    return timestamp >= periodStart
      && (period !== '7D' || timestamp < currentWeekStart)
      && (period !== '24H' || timestamp < trendDayStart + 24 * 60 * 60 * 1000)
      && (period !== '30D' || timestamp < trendMonthEnd)
  })
  const displayedTrendSeries = period === '30D'
    ? [...filteredTrendSeries.reduce((days, point) => {
        const date = point.time.slice(0, 10)
        const day = days.get(date) ?? { sum: 0, count: 0 }
        day.sum += point.value
        day.count += 1
        days.set(date, day)
        return days
      }, new Map())].map(([date, day]) => ({ time: `${date}T12:00`, value: Math.round(day.sum / day.count) }))
    : filteredTrendSeries
  const trendPoints = displayedTrendSeries.map((point, index, points) => {
    const timestamp = parseTrendTimestamp(point.time)
    return {
      ...point,
      x: period === '7D'
        ? (timestamp - trendWeekStart) / (7 * 24 * 60 * 60 * 1000) * 500
        : period === '24H' && trendDayStart !== null
          ? (timestamp - trendDayStart) / (24 * 60 * 60 * 1000) * 500
          : period === '30D' && trendMonthStart !== null && trendMonthEnd !== null
            ? (timestamp - trendMonthStart) / (trendMonthEnd - trendMonthStart) * 500
            : points.length > 1 ? index / (points.length - 1) * 500 : 250,
      y: 100 - Math.min(point.value, 500) / 5,
      label: new Intl.DateTimeFormat('en', {
        timeZone: 'UTC',
        hourCycle: period === '24H' ? 'h23' : undefined,
        ...(period === '30D'
          ? { month: 'short', day: 'numeric' }
          : { hour: period === '24H' ? '2-digit' : 'numeric', ...(period === '7D' ? { weekday: 'short', month: 'short', day: 'numeric' } : {}) }),
      }).format(new Date(`${point.time}:00Z`)),
    }
  })
  const trendPath = trendPoints.reduce((path, point, index) =>
    `${path}${index === 0 ? 'M' : ' L'} ${point.x} ${point.y}`, '')
  const trendAreaPath = trendPoints.length ? `${trendPath} L 500 100 L 0 100 Z` : ''
  const trendPointStride = Math.max(1, Math.ceil(trendPoints.length / 18))
  const visibleTrendPoints = trendPoints.filter((_, index) => index % trendPointStride === 0 || index === trendPoints.length - 1)
  const trendAxisLabels = period === '24H' && trendDayStart !== null
    ? [0, 12, 24].map((hour) => {
        const date = new Date(trendDayStart + hour * 60 * 60 * 1000)
        return {
          time: date.toISOString(),
          label: new Intl.DateTimeFormat('en-GB', {
            timeZone: 'UTC',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
          }).format(date),
        }
      })
    : period === '7D' && currentWeekStart !== null
      ? Array.from({ length: 7 }, (_, index) => {
        const date = new Date(trendWeekStart + index * 24 * 60 * 60 * 1000)
        return {
          time: date.toISOString(),
          label: new Intl.DateTimeFormat('en', { timeZone: 'UTC', weekday: 'short' }).format(date),
        }
        })
      : trendPoints.length > 0
        ? [trendPoints[0], trendPoints[Math.floor((trendPoints.length - 1) / 2)], trendPoints[trendPoints.length - 1]]
          .filter((point, index, points) => points.findIndex((candidate) => candidate.time === point.time) === index)
        : []
  const pageCopy = {
    Overview: ['Country overview', 'Current air quality snapshots for monitored Southeast Asian countries.'],
    'Live radar': ['Country air quality radar', `Explore modelled air quality across ${selectedCountry}.`],
    Monitoring: [`${selectedCountry} air quality`, `Current air-quality readings for major cities across ${selectedCountry}.`],
    Trends: ['Country air-quality trends', 'Compare historical AQI across each country’s monitored cities.'],
    Profile: ['My profile', 'Manage your profile details.'],
    Settings: ['Settings', 'Manage your dashboard preferences.'],
  }
  const searchOptions = [
    ...Object.keys(pageCopy).map((page) => ({
      id: `page-${page}`,
      label: page,
      detail: 'Page',
      page,
    })),
    ...countryOverview.map(({ name }) => ({
      id: `country-${name}`,
      label: name,
      detail: 'Country · Monitoring',
      page: 'Monitoring',
      country: name,
    })),
    ...Object.entries(citiesByCountry).flatMap(([country, cities]) => cities.map((city) => ({
      id: `city-${city.id}`,
      label: city.name,
      detail: `${city.state} · ${country}`,
      page: 'Monitoring',
      country,
    }))),
  ]
  const normalizedSearchQuery = searchQuery.trim().toLocaleLowerCase()
  const matchingSearchOptions = (normalizedSearchQuery
    ? searchOptions.filter((option) => `${option.label} ${option.detail}`.toLocaleLowerCase().includes(normalizedSearchQuery))
    : searchOptions.slice(0, 5)).slice(0, 8)
  const selectSearchResult = (result) => {
    if (result.country) setSelectedCountry(result.country)
    setActiveNav(result.page)
    setSearchOpen(false)
    setSearchQuery('')
    setProfileMenuOpen(false)
  }
  const openProfile = () => {
    setProfileDraft(profile)
    setProfileEditing(false)
    setProfileMenuOpen(false)
    setActiveNav('Profile')
  }
  const exportTrend = () => {
    const rows = [
      ['Country', selectedCountry],
      ['Aggregation', 'Average AQI across reporting cities'],
      ['Time range', period],
      ['Time', 'US AQI'],
      ...trendPoints.map(({ time, value }) => [time, value]),
    ]
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(',')).join('\n')
    const file = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = `${selectedCountry.toLowerCase()}-aqi-trend-${period.toLowerCase()}.csv`
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <div className={`app-shell ${compactUnits ? 'compact-units' : ''}`}>
      <aside className="sidebar">
        <a className="brand" href="#overview" aria-label="Haze home">
          <span className="brand-mark"><Icon name="radar" size={22} /></span>
          <span>Haze<span className="brand-light">Radar</span></span>
        </a>

        <div className="nav-label">WORKSPACE</div>
        <nav className="main-nav" aria-label="Main navigation">
          {[
            ['Overview', 'grid'],
            ['Live radar', 'radar'],
            ['Monitoring', 'map'],
            ['Trends', 'chart'],
          ].map(([label, icon]) => (
            <button
              className={`nav-item ${activeNav === label ? 'active' : ''}`}
              key={label}
              onClick={() => setActiveNav(label)}
              aria-current={activeNav === label ? 'page' : undefined}
              type="button"
            >
              <Icon name={icon} />
              <span>{label}</span>
              {label === 'Overview' && unhealthyBadgeEnabled && !cityReadingsLoading && unhealthySelectedCountryCityCount > 0 && (
                <span className="nav-badge" aria-label={`${unhealthySelectedCountryCityCount} unhealthy locations in ${selectedCountry}`}>
                  {unhealthySelectedCountryCityCount}
                </span>
              )}
              {label === 'Live radar' && <span className="nav-live-dot" />}
            </button>
          ))}
        </nav>

        <div className="nav-label stations-label">MONITORING</div>
        {countryOverview.map((country) => (
          <button
            className="station-shortcut country-shortcut"
            key={country.name}
            type="button"
            onClick={() => {
              setSelectedCountry(country.name)
              setActiveNav('Monitoring')
            }}
            aria-label={`Show ${country.name} city air quality`}
            aria-pressed={activeNav === 'Monitoring' && selectedCountry === country.name}
          >
            <span className="station-dot station-dot-muted" />
            <span><strong>{country.name}</strong><small>Country air quality</small></span>
            {activeNav === 'Monitoring' && selectedCountry === country.name && <span className="selected-station-pill">Selected</span>}
            <span className="online-dot" />
          </button>
        ))}

        <div className="sidebar-bottom">
          <div className="sidebar-status"><span className="online-dot" /> All systems operational</div>
          <button
            className={`nav-item settings-item ${activeNav === 'Settings' ? 'active' : ''}`}
            type="button"
            onClick={() => setActiveNav('Settings')}
            aria-current={activeNav === 'Settings' ? 'page' : undefined}
          >
            <Icon name="settings" /><span>Settings</span>
          </button>
          <div className="profile-control">
            <div className="profile">
              <div className="avatar">{profile.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase()}</div>
              <div><strong>{profile.name}</strong><small>{profile.role}</small></div>
              <button
                className="profile-menu"
                type="button"
                aria-label={profileMenuOpen ? 'Close profile menu' : 'Open profile menu'}
                aria-expanded={profileMenuOpen}
                aria-controls="profile-menu"
                onClick={() => setProfileMenuOpen((open) => !open)}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') setProfileMenuOpen(false)
                }}
              >
                <Icon name="chevron" size={16} />
              </button>
            </div>
            {profileMenuOpen && <div
              className="profile-popover"
              id="profile-menu"
              role="menu"
              aria-label="Profile menu"
              onKeyDown={(event) => {
                if (event.key === 'Escape') setProfileMenuOpen(false)
              }}
            >
              <div className="profile-popover-heading">
                <strong>{profile.name}</strong>
                <small>{profile.role}</small>
              </div>
              <button type="button" role="menuitem" onClick={openProfile}>My profile</button>
              <button type="button" role="menuitem" onClick={() => {
                setProfileMenuOpen(false)
                setActiveNav('Settings')
              }}>Dashboard settings</button>
            </div>}
          </div>
        </div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb"><span>Workspace</span><span className="crumb-divider">/</span><strong>{activeNav}</strong></div>
          <div className="topbar-actions">
            <span className="demo-pill"><span /> LIVE FEED</span>
            <div className="search-control">
              <button
                className="icon-button search-button"
                type="button"
                aria-label={searchOpen ? 'Close search' : 'Search'}
                aria-expanded={searchOpen}
                aria-controls="global-search"
                onClick={() => {
                  setSearchOpen((open) => !open)
                  setSearchQuery('')
                }}
              >
                <Icon name="search" />
              </button>
              {searchOpen && <div className="search-popover" id="global-search" role="search">
                <label className="search-input-wrap">
                  <Icon name="search" size={16} />
                  <input
                    autoFocus
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') setSearchOpen(false)
                      if (event.key === 'Enter' && matchingSearchOptions.length) selectSearchResult(matchingSearchOptions[0])
                    }}
                    placeholder="Search pages, countries, or cities"
                    aria-label="Search pages, countries, or cities"
                  />
                </label>
                <div className="search-results" role="list">
                  {matchingSearchOptions.length
                    ? matchingSearchOptions.map((result) => (
                        <button
                          className="search-result"
                          key={result.id}
                          type="button"
                          role="listitem"
                          onClick={() => selectSearchResult(result)}
                        >
                          <span>{result.label}</span>
                          <small>{result.detail}</small>
                        </button>
                      ))
                    : <p className="search-empty">No matching pages, countries, or cities.</p>}
                </div>
              </div>}
            </div>
            <div className="notification-control">
              <button
                className="icon-button notification-button"
                type="button"
                aria-label={notificationsOpen ? 'Close air-quality alerts' : 'Open air-quality alerts'}
                aria-expanded={notificationsOpen}
                aria-controls="air-quality-alerts"
                onClick={() => setNotificationsOpen((open) => !open)}
              >
                <Icon name="bell" />
              </button>
              {notificationsOpen && <section className="notification-popover" id="air-quality-alerts" aria-label="Air-quality alerts">
                <div className="notification-heading">
                  <strong>Air-quality alerts</strong>
                  <span>{airQualityAlerts.length}</span>
                </div>
                {cityReadingsLoading
                  ? <p className="notification-empty">Checking current city readings…</p>
                  : airQualityAlerts.length
                    ? <div className="notification-list">
                        {airQualityAlerts.slice(0, 6).map((alert) => {
                          const assessment = assessAqi(alert.reading.aqi)
                          return (
                            <button
                              className="notification-item"
                              key={alert.id}
                              type="button"
                              onClick={() => {
                                setSelectedCountry(alert.country)
                                setActiveNav('Live radar')
                                setNotificationsOpen(false)
                              }}
                            >
                              <span className={`notification-marker ${assessment.tone}`} />
                              <span className="notification-copy">
                                <strong>{alert.name}</strong>
                                <small>{alert.country} · {assessment.category}</small>
                              </span>
                              <strong className="notification-aqi">{alert.reading.aqi}</strong>
                            </button>
                          )
                        })}
                      </div>
                    : <p className="notification-empty">No unhealthy locations reported right now.</p>}
                <button
                  className="notification-view-all"
                  type="button"
                  onClick={() => {
                    setActiveNav('Live radar')
                    setNotificationsOpen(false)
                  }}
                >
                  View live radar <Icon name="arrow" size={14} />
                </button>
              </section>}
            </div>
            <div className="topbar-divider" />
            <div className="today-label">{today}</div>
          </div>
        </header>

        <div className="dashboard">
          <section className="page-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> AIR QUALITY INTELLIGENCE</div>
              <h1>{pageCopy[activeNav][0]}</h1>
              <p>{pageCopy[activeNav][1]}</p>
            </div>
            {['Live radar', 'Monitoring', 'Trends'].includes(activeNav) && <label className="station-select-wrap">
              <span className="select-icon"><Icon name="map" size={17} /></span>
              <span className="region-select-label">COUNTRY</span>
              <select
                value={selectedCountry}
                onChange={(event) => setSelectedCountry(event.target.value)}
                aria-label={`Select country for ${activeNav.toLowerCase()}`}
              >
                {countryOverview.map(({ name }) => <option key={name} value={name}>{name}</option>)}
              </select>
              <Icon name="chevron" size={16} />
            </label>}
          </section>

          {isOverview && <section className="panel country-overview-panel" aria-label="Country air quality overview">
            <div className="panel-heading">
              <div>
                <div className="panel-title"><Icon name="map" size={17} /> Monitored countries</div>
                <div className="panel-subtitle">Current US AQI and health category · live model estimates</div>
              </div>
              <span className="network-status"><span /> OPEN-METEO</span>
            </div>
            <div className="country-overview-grid">
              {countrySummaries.map((country) => {
                const assessment = Number.isFinite(country.aqi) ? assessAqi(country.aqi) : null
                return (
                  <article className="country-overview-card" key={country.name}>
                    <div className="country-overview-card-heading">
                      <span className="station-card-region">COUNTRY</span>
                      {assessment && <span className={`city-health-badge ${assessment.tone}`}>{assessment.health}</span>}
                    </div>
                    <strong>{country.name}</strong>
                    <div className="city-aqi-value">
                      {assessment ? country.aqi : '—'}
                      <small> US AQI</small>
                    </div>
                    <span className="city-aqi-category">{assessment?.category ?? (country.loading ? 'Loading current reading…' : 'Reading unavailable')}</span>
                    <span className="country-overview-source">{country.coverage}</span>
                    <button
                      className="country-cities-action"
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country.name)
                        setActiveNav('Monitoring')
                      }}
                    >
                      View cities in {country.name} <Icon name="arrow" size={14} />
                    </button>
                  </article>
                )
              })}
            </div>
            <p className="malaysia-data-note">
              Country cards show the average of reporting cities.
              AQI is the US EPA scale; 101+ is unhealthy for at least some groups.
              {' '}Source: <a href="https://open-meteo.com/en/docs/air-quality-api" target="_blank" rel="noreferrer">Open-Meteo Air Quality API</a>.
            </p>
          </section>}

          {activeNav === 'Live radar' && <section className="metric-grid" aria-label="Current air quality metrics">
            <article className="metric-card index-card">
              <div className="metric-top"><span>COUNTRY AVG AQI</span><span className="metric-icon green-icon"><Icon name="wind" size={17} /></span></div>
              <div className="gauge-metric">
                {countryAqi !== null
                  ? <div className={`metric-gauge ${assessAqi(countryAqi).tone}`} style={{ '--gauge-value': `${Math.min(countryAqi, 100)}%` }} role="img" aria-label={`Average country AQI ${countryAqi}, ${assessAqi(countryAqi).category}`}>
                      <span><strong>{countryAqi}</strong><small> AQI</small></span>
                    </div>
                  : <div className="metric-country-loading">—</div>}
                <div className="gauge-details">
                  <span className={`status-chip ${countryAqi !== null ? assessAqi(countryAqi).tone : ''}`}>{countryAqi !== null ? assessAqi(countryAqi).category : 'No data'}</span>
                  <span className="metric-note">{selectedCountry}</span>
                </div>
              </div>
            </article>
            <article className="metric-card">
              <div className="metric-top"><span>AVERAGE PM2.5</span><span className="metric-icon amber-icon"><Icon name="droplets" size={17} /></span></div>
              <div className="pm-concentration">
                <div className="metric-value">{countryPm25 === null ? '—' : countryPm25.toFixed(1)}<span className="metric-unit">μg/m³</span></div>
                <div className="pm-concentration-meta"><span className="metric-note">Mean across reporting cities</span></div>
                <div className="concentration-track" role="progressbar" aria-label="Average PM2.5 concentration" aria-valuemin="0" aria-valuemax="100" aria-valuenow={countryPm25 ?? 0}>
                  <span style={{ width: `${Math.min(countryPm25 ?? 0, 100)}%` }} />
                </div>
              </div>
            </article>
            <article className="metric-card">
              <div className="metric-top"><span>CITIES REPORTING</span><span className="metric-icon blue-icon"><Icon name="buildings" size={17} /></span></div>
              <div className="metric-value">{cityReadingsLoading ? '—' : reportingCountryCityCount}<span className="metric-unit">/ {selectedCountryCities.length}</span></div>
              <div className="metric-bottom"><span className="metric-note">Monitored locations with current AQI</span></div>
            </article>
            <article className="metric-card">
              <div className="metric-top"><span>UNHEALTHY LOCATIONS</span><span className="metric-icon blue-icon"><Icon name="warning" size={17} /></span></div>
              <div className="metric-value">{unhealthySelectedCountryCityCount}<span className="metric-unit">/ {reportingCountryCityCount}</span></div>
              <div className="metric-bottom"><span className="metric-note">AQI above 100</span></div>
            </article>
          </section>}

          {activeNav === 'Live radar' && <section className="analysis-grid">
            <article className="panel radar-panel">
              <div className="panel-heading">
                <div>
                  <div className="panel-title">{selectedCountry} air-quality coverage</div>
                  <div className="panel-subtitle">Monitored cities plotted by geographic position · modelled current AQI</div>
                </div>
                <div className="radar-live"><span /> OPEN-METEO</div>
              </div>
              <div className="radar-layout">
                <div className="country-map-visual" role="group" aria-label={`${selectedCountry} geographic plot showing current AQI at monitored cities`}>
                  <div className="map-gridline map-gridline-horizontal" />
                  <div className="map-gridline map-gridline-vertical" />
                  {countryMapMarkers.map((city) => (
                    <span
                      className={`country-map-marker ${city.assessment.tone}${city.x > 50 ? ' tooltip-left' : ' tooltip-right'}${city.y < 30 ? ' tooltip-below' : ''}`}
                      key={city.id}
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                      title={`${city.name}: AQI ${city.reading.aqi} (${city.assessment.category})`}
                      tabIndex="0"
                      aria-label={`${city.name}, AQI ${city.reading.aqi}, ${city.assessment.category}`}
                    >
                      <i />
                    <span className="map-marker-tooltip" aria-hidden="true">
                      <strong>{city.name}</strong>
                      <span>AQI {city.reading.aqi} · {city.assessment.category}</span>
                    </span>
                  </span>
                  ))}
                  {cityReadingsLoading && <span className="map-status-message">Loading city readings…</span>}
                  {!cityReadingsLoading && !countryMapMarkers.length && <span className="map-status-message">No current readings available for this country.</span>}
                  <span className="map-coordinate-label map-west">{Math.min(...cityLongitudes).toFixed(1)}°</span>
                  <span className="map-coordinate-label map-east">{Math.max(...cityLongitudes).toFixed(1)}°</span>
                  <span className="map-coordinate-label map-north">{Math.max(...cityLatitudes).toFixed(1)}°</span>
                  <span className="map-coordinate-label map-south">{Math.min(...cityLatitudes).toFixed(1)}°</span>
                </div>
                <div className="radar-legend">
                  <div className="legend-heading">US AQI HEALTH CATEGORY</div>
                  <div className="signature-row"><span className="signature-dot dot-good" /><span>Good · 0–50</span></div>
                  <div className="signature-row"><span className="signature-dot dot-moderate" /><span>Moderate · 51–100</span></div>
                  <div className="signature-row"><span className="signature-dot dot-unhealthy" /><span>Unhealthy+ · 101–500</span></div>
                  <div className="legend-divider" />
                  <div className="legend-heading">LOCATIONS SHOWN</div>
                  <div className="radar-country-count">{reportingCountryCityCount} of {selectedCountryCities.length} cities</div>
                  <div className="radar-note">Dots show city AQI, not sensor or radar detections.</div>
                </div>
              </div>
              <div className="radar-footer"><span><span className="footer-status-dot" /> Model estimates</span><span>Country <b>{selectedCountry}</b></span><span>Updates every <b>15 min</b></span><button type="button" onClick={() => setActiveNav('Monitoring')}>View city readings <Icon name="arrow" size={15} /></button></div>
            </article>

            {activeNav === 'Live radar' && <article className="panel alerts-panel">
              <div className="panel-heading">
                <div>
                  <div className="panel-title">Highest AQI locations <span className="alert-count">{unhealthySelectedCountryCityCount}</span></div>
                  <div className="panel-subtitle">Current readings in {selectedCountry}</div>
                </div>
              </div>
              {cityReadingsLoading
                ? <div className="alerts-muted">Loading city AQI readings…</div>
                : countryHotspots.length
                  ? <div className="alert-list">
                      {countryHotspots.slice(0, 6).map((city) => {
                        const assessment = assessAqi(city.reading.aqi)
                        return (
                          <div className="alert-item" key={city.id}>
                            <div className={`alert-marker ${assessment.tone}`}><span /></div>
                            <div className="alert-copy">
                              <div className="alert-title">{city.name}<span className={`alert-level ${assessment.tone}`}>{assessment.category}</span></div>
                              <div className="alert-place">{city.state}</div>
                            </div>
                            <strong className="country-city-aqi">{city.reading.aqi}</strong>
                          </div>
                        )
                      })}
                    </div>
                  : <div className="alerts-muted">No current city readings are available for {selectedCountry}.</div>}
            </article>}
          </section>}

          {activeNav === 'Trends' && <section className="panel trend-panel trend-page">
            <div className="panel-heading trend-heading">
              <div>
                <div className="panel-title">{selectedCountry} air quality trend</div>
                <div className="panel-subtitle">{period === '30D' ? 'Current month daily' : period === '7D' ? 'Monday–Sunday hourly' : 'Hourly'} average modelled US AQI across reporting cities · Open-Meteo history · UTC</div>
              </div>
              <div className="trend-controls">
                <span className="trend-legend"><i /> US AQI</span>
                <div className="period-switch" role="group" aria-label="Trend time period">
                  {trendPeriods.map((value) => <button className={period === value ? 'selected' : ''} key={value} type="button" aria-pressed={period === value} onClick={() => setPeriod(value)}>{value}</button>)}
                </div>
                <button className="export-button" type="button" onClick={exportTrend} disabled={!trendPoints.length}>Export CSV</button>
              </div>
            </div>
            <div className="chart">
              <div className="chart-y-labels"><span>500</span><span>375</span><span>250</span><span>125</span><span>0</span></div>
              <div className="chart-plot">
                <div className="chart-gridline" /><div className="chart-gridline" /><div className="chart-gridline" /><div className="chart-gridline" /><div className="chart-gridline" />
                {trendPoints.length > 0 && <svg viewBox="0 0 500 100" preserveAspectRatio="none" role="group" aria-label={`${period} average US AQI trend for ${selectedCountry}`}>
                  <defs><linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#4c9a78" stopOpacity=".22" /><stop offset="100%" stopColor="#4c9a78" stopOpacity="0" /></linearGradient></defs>
                  <path d={trendAreaPath} fill="url(#trendFill)" />
                  <path d={trendPath} className="trend-line" fill="none" vectorEffect="non-scaling-stroke" />
                </svg>}
                {visibleTrendPoints.map((point) => (
                  <button
                    key={point.time}
                    className="chart-point"
                    style={{ left: `${point.x / 5}%`, top: `${point.y}%` }}
                    type="button"
                    aria-label={`${point.label}: US AQI ${point.value}`}
                  >
                    <span className="chart-tooltip" aria-hidden="true">
                      <strong>AQI {point.value}</strong>
                      <span>{point.label} UTC</span>
                    </span>
                  </button>
                ))}
                {trendLoading && <div className="trend-chart-message">Loading historical AQI…</div>}
                {!trendLoading && trendError && <div className="trend-chart-message error">{trendError}</div>}
                {!trendLoading && !trendError && !trendPoints.length && <div className="trend-chart-message">No AQI readings for this time range.</div>}
              </div>
              <div className="chart-x-labels">{trendAxisLabels.map((point) => <span key={point.time}>{point.label}</span>)}</div>
            </div>
            <div className="chart-footnote">
              <span>Each point averages available modelled AQI readings; historical gaps are excluded. Times are UTC.</span>
              <span>{trendPoints.length ? `${trendPoints.length} hourly/daily averages · US EPA AQI` : 'Historical city data'}</span>
            </div>
          </section>}

          {activeNav === 'Monitoring' && <section className="panel monitoring-panel">
            <div className="panel-heading">
              <div>
                <div className="panel-title"><Icon name="map" size={17} /> {selectedCountry} city air quality</div>
                <div className="panel-subtitle">Live US AQI and PM2.5 estimates for major cities</div>
              </div>
              <span className="network-status"><span /> OPEN-METEO</span>
            </div>
            <div className="malaysia-summary" aria-live="polite">
              <strong>
                {cityReadingsLoading
                  ? 'Loading current city readings…'
                  : `${reportingCountryCityCount} of ${selectedCountryCities.length} cities reporting`}
              </strong>
              {!cityReadingsLoading && <span>{unhealthySelectedCountryCityCount} unhealthy {unhealthySelectedCountryCityCount === 1 ? 'city' : 'cities'} · Refreshes every 15 minutes</span>}
            </div>
            <div className="malaysia-city-grid">
              {selectedCountryCities.map((city) => {
                const reading = cityReadings[city.id]
                const assessment = Number.isFinite(reading?.aqi) ? assessAqi(reading.aqi) : null
                return (
                  <article className={`malaysia-city-card ${assessment?.tone ?? 'unavailable'}`} key={city.id}>
                    <div className="malaysia-city-heading">
                      <span className="station-card-region">{city.state}</span>
                      {assessment && <span className={`city-health-badge ${assessment.tone}`}>{assessment.health}</span>}
                    </div>
                    <strong>{city.name}</strong>
                    {assessment
                      ? <>
                          <div className="city-aqi-value">{reading.aqi}<small> US AQI</small></div>
                          <span className="city-aqi-category">{assessment.category}</span>
                          <span className="city-pm-value">
                            PM2.5 {reading.pm25 === null ? '—' : `${reading.pm25.toFixed(1)} μg/m³`}
                          </span>
                          {reading.time && <span className="city-reading-time">Local data time {reading.time}</span>}
                        </>
                      : <div className="city-unavailable" title={reading?.error ?? ''}>
                          {cityReadingsLoading ? 'Loading current AQI…' : 'Live AQI unavailable'}
                        </div>}
                  </article>
                )
              })}
            </div>
            <p className="malaysia-data-note">
              Readings use the US EPA AQI scale: 0–50 Good, 51–100 Moderate, and 101+ unhealthy for at least some groups.
              These are Open-Meteo model-based estimates, not official government monitoring-station measurements.
              {' '}Source: <a href="https://open-meteo.com/en/docs/air-quality-api" target="_blank" rel="noreferrer">Open-Meteo Air Quality API</a>.
            </p>
          </section>}

          {activeNav === 'Settings' && <section className="panel settings-panel">
            <div className="panel-heading">
              <div><div className="panel-title">Dashboard preferences</div><div className="panel-subtitle">Personalize how HazeRadar displays monitoring information.</div></div>
            </div>
            <label className="setting-row">
              <span><strong>Unhealthy AQI badge</strong><small>Show an Overview badge when monitored locations in the selected country exceed US AQI 100.</small></span>
              <input type="checkbox" checked={unhealthyBadgeEnabled} onChange={(event) => setUnhealthyBadgeEnabled(event.target.checked)} />
            </label>
            <label className="setting-row">
              <span><strong>Compact units</strong><small>Use a compact display for measurement units.</small></span>
              <input type="checkbox" checked={compactUnits} onChange={(event) => setCompactUnits(event.target.checked)} />
            </label>
            <p className="demo-disclaimer">Preferences apply to this dashboard session.</p>
          </section>}

          {activeNav === 'Profile' && <section className="panel profile-panel">
            <div className="panel-heading">
              <div>
                <div className="panel-title">Profile details</div>
                <div className="panel-subtitle">Your profile is saved for this dashboard session.</div>
              </div>
              {!profileEditing && <button className="profile-edit-button" type="button" onClick={() => {
                setProfileDraft(profile)
                setProfileEditing(true)
              }}>Edit profile</button>}
            </div>
            {profileEditing
              ? <form className="profile-form" onSubmit={(event) => {
                  event.preventDefault()
                  setProfile({
                    name: profileDraft.name.trim(),
                    role: profileDraft.role.trim(),
                  })
                  setProfileEditing(false)
                }}>
                  <label>
                    <span>Full name</span>
                    <input
                      autoFocus
                      autoComplete="name"
                      minLength={1}
                      pattern=".*\S.*"
                      required
                      value={profileDraft.name}
                      onChange={(event) => setProfileDraft((draft) => ({ ...draft, name: event.target.value }))}
                    />
                  </label>
                  <label>
                    <span>Role</span>
                    <input
                      autoComplete="organization-title"
                      minLength={1}
                      pattern=".*\S.*"
                      required
                      value={profileDraft.role}
                      onChange={(event) => setProfileDraft((draft) => ({ ...draft, role: event.target.value }))}
                    />
                  </label>
                  <div className="profile-form-actions">
                    <button className="profile-cancel-button" type="button" onClick={() => {
                      setProfileDraft(profile)
                      setProfileEditing(false)
                    }}>Cancel</button>
                    <button className="profile-save-button" type="submit">Save changes</button>
                  </div>
                </form>
              : <div className="profile-details">
                  <div className="profile-details-avatar">{profile.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase()}</div>
                  <div><span>Full name</span><strong>{profile.name}</strong></div>
                  <div><span>Role</span><strong>{profile.role}</strong></div>
                </div>}
          </section>}

          <footer className="dashboard-footer"><span>HAZERADAR <b>·</b> ATMOSPHERIC MONITORING PLATFORM</span><span>{activeNav === 'Monitoring' ? `${selectedCountry} AQI refreshes every 15 minutes` : 'Data refreshes every 2 minutes'} <i /></span></footer>
        </div>
      </main>
    </div>
  )
}

export default App
