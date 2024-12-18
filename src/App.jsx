import { Button } from '@mantine/core'
import './App.css'
import { modals } from '@mantine/modals'

function App() {
//   return <Editor svgString={`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 124 124" fill="none">
// <text fill="red" y="20">Hola <tspan fill="blue">amigo</tspan> how are you?</text>
// </svg>`} onExport={(svg) => console.log(svg)} />
  return (
    <Button onClick={() => modals.openContextModal({
      modal: 'editor',
      size: '80vw',
      innerProps: {
        svgString: `<svg id="SvgjsSvg1390" width="400" height="282.8" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><foreignObject x="0" y="0" width="400" height="282.8"><div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml"></div></foreignObject><g id="SvgjsG1392" class="apexcharts-inner apexcharts-graphical" transform="translate(63, 0)"><defs id="SvgjsDefs1391"><clipPath id="gridRectMaskyeiqeuz0g"><rect id="SvgjsRect1393" width="280" height="302" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMaskyeiqeuz0g"></clipPath><clipPath id="nonForecastMaskyeiqeuz0g"></clipPath><clipPath id="gridRectMarkerMaskyeiqeuz0g"><rect id="SvgjsRect1394" width="280" height="302" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1395" class="apexcharts-pie"><g id="SvgjsG1396" transform="translate(0, 0) scale(1)"><circle id="SvgjsCircle1397" r="84.91219512195123" cx="138" cy="138" fill="transparent"></circle><g id="SvgjsG1398" class="apexcharts-slices"><g id="SvgjsG1399" class="apexcharts-series apexcharts-pie-series" seriesName="Desktop" rel="1" data:realIndex="0"><path id="SvgjsPath1400" d="M 138 7.365853658536565 A 130.63414634146343 130.63414634146343 0 1 1 42.771805647095576 227.42522681351358 L 76.10167367061213 196.12639742878383 A 84.91219512195123 84.91219512195123 0 1 0 138 53.08780487804877 L 138 7.365853658536565 z " fill="rgba(99,91,255,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-0" index="0" j="0" data:angle="226.8" data:startAngle="0" data:strokeWidth="0" data:value="63" data:pathOrig="M 138 7.365853658536565 A 130.63414634146343 130.63414634146343 0 1 1 42.771805647095576 227.42522681351358 L 76.10167367061213 196.12639742878383 A 84.91219512195123 84.91219512195123 0 1 0 138 53.08780487804877 L 138 7.365853658536565 z "></path></g><g id="SvgjsG1401" class="apexcharts-series apexcharts-pie-series" seriesName="Tablet" rel="2" data:realIndex="1"><path id="SvgjsPath1402" d="M 42.771805647095576 227.42522681351358 A 130.63414634146343 130.63414634146343 0 0 1 9.67974353895471 113.52160192875263 L 54.59183330032056 122.08904125368922 A 84.91219512195123 84.91219512195123 0 0 0 76.10167367061213 196.12639742878383 L 42.771805647095576 227.42522681351358 z " fill="rgba(21,183,159,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-1" index="0" j="1" data:angle="54" data:startAngle="226.8" data:strokeWidth="0" data:value="15" data:pathOrig="M 42.771805647095576 227.42522681351358 A 130.63414634146343 130.63414634146343 0 0 1 9.67974353895471 113.52160192875263 L 54.59183330032056 122.08904125368922 A 84.91219512195123 84.91219512195123 0 0 0 76.10167367061213 196.12639742878383 L 42.771805647095576 227.42522681351358 z "></path></g><g id="SvgjsG1403" class="apexcharts-series apexcharts-pie-series" seriesName="Phone" rel="3" data:realIndex="2"><path id="SvgjsPath1404" d="M 9.67974353895471 113.52160192875263 A 130.63414634146343 130.63414634146343 0 0 1 137.97720004042384 7.365855648208395 L 137.9851800262755 53.08780617133546 A 84.91219512195123 84.91219512195123 0 0 0 54.59183330032056 122.08904125368922 L 9.67974353895471 113.52160192875263 z " fill="rgba(251,156,12,1)" fill-opacity="1" stroke-opacity="1" stroke-linecap="butt" stroke-width="0" stroke-dasharray="0" class="apexcharts-pie-area apexcharts-donut-slice-2" index="0" j="2" data:angle="79.19999999999999" data:startAngle="280.8" data:strokeWidth="0" data:value="22" data:pathOrig="M 9.67974353895471 113.52160192875263 A 130.63414634146343 130.63414634146343 0 0 1 137.97720004042384 7.365855648208395 L 137.9851800262755 53.08780617133546 A 84.91219512195123 84.91219512195123 0 0 0 54.59183330032056 122.08904125368922 L 9.67974353895471 113.52160192875263 z "></path></g></g></g></g><line id="SvgjsLine1405" x1="0" y1="0" x2="276" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1406" x1="0" y1="0" x2="276" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line></g></svg>`
      },
      withCloseButton: false,
      styles: {
        body: {
          padding: 0,
          height: '80vh'
        }
      }
    })}>Open editor</Button>
  )
}

export default App
