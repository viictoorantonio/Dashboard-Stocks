/* LIBARYS */
import { Area, ComposedChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import moment from 'moment'

/* STYLES */
import { ContainerChart, BoxTooltip, } from './styles'

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (<BoxTooltip>{moment(label).format('DD/MM/yyyy')}<strong>${payload[0].value}</strong></BoxTooltip>)
    }
    return null
}

const XAxisTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text x="15" y="10" dy="10" textAnchor="end" fill="#657786" style={{ fontSize: 12, fontWeight: 400 }}>{moment(payload.value).format('DD/MM/yyyy')}</text>
        </g>
    )
}

const YAxisTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <text textAnchor="end" fill="#657786" style={{ fontSize: 12, fontWeight: 400 }}>${payload.value}</text>
        </g>
    )
}

function Chart({ data, dataKey }) {

    return (
        <ContainerChart>
            <ResponsiveContainer>
                <ComposedChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="30%" stopColor="#0047BB" stopOpacity={0.1} />
                            <stop offset="70%" stopColor="#FFFFFF" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="date" axisLine={false} tickLine={false} tick={<XAxisTick />} />
                    <YAxis axisLine={false} tickLine={false} tick={<YAxisTick />} />
                    <Tooltip content={<CustomTooltip />} />

                    <Line type="monotone" dataKey={dataKey} stroke="#0047BB" dot={false} />
                    <Area type="monotone" dataKey={dataKey} stroke={false} strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                </ComposedChart>
            </ResponsiveContainer>
        </ContainerChart>
    )
}

export default Chart