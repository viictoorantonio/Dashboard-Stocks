/* LIBARYS */
import { AiOutlineLoading } from 'react-icons/ai'

/* STYLES */
import { BoxLoading } from './styles'

function Loading() {
    return (
        <BoxLoading>
            <AiOutlineLoading style={{ animation: 'spin .7s infinite', fontSize: 26, color: '#0047BB' }} />
        </BoxLoading>
    )
}

export default Loading