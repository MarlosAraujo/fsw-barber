import { format } from "date-fns"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-xs text-gray-400">
            © 2023-{format(new Date(), "yyyy")} Copyright <span className="font-bold">NSW Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
