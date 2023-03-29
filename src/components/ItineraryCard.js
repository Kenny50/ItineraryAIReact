export default function ItineraryCard({title, body}) {
    return (
        <div>
            <h2>{title}</h2>
            <span style={{whiteSpace: "pre-line"}}>{body}</span>
        </div>
    )
}