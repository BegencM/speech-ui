import { ReactQueryDevtools } from 'react-query/devtools'

import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
return (
<QueryClientProvider client={queryClient}>
{/_ The rest of your application _/}
<ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
)
}
