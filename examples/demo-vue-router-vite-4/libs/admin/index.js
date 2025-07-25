import { computed } from 'vue-demi';
import { useRoute, useRouter } from 'vue-router-demi';

function useRouteQuery() {
    const route = useRoute();
    const router = useRouter();
    return computed({
        get: () => route.query,
        set: (val) => router.push({ query: val })
    });
}

export { useRouteQuery };
