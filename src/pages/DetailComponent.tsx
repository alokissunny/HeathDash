import React from 'react';
import { useParams
} from "react-router-dom";
export default function Detail(props:any) {
const { id }  = useParams();

return <div>Detail chart {id}</div>;
}