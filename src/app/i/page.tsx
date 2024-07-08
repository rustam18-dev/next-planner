import {Metadata} from "next";
import {NO_INDEX_PAGE} from "@/constants/seo.constants";
import {Auth} from "@/app/auth/Auth";
import { Heading } from '@/components/ui/Heading'
import Statistics from '@/app/i/Statistics'


export const metadata: Metadata = {
	title: 'Auth',
	...NO_INDEX_PAGE
}

export default function Dashboard() {
	return <div>
		<Heading title={'Statistics'} />
		<Statistics />
	</div>
}