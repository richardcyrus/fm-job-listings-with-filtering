import Layout from '../components/Layout'
import Card from '../components/Card'

import { jobList } from '../data/data'

export const getStaticProps = async () => {
  return {
    props: {
      jobs: jobList,
    },
  }
}

export default function Home({ jobs }) {
  return (
    <Layout>
      {jobs.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </Layout>
  )
}
