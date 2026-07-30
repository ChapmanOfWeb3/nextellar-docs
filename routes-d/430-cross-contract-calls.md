# Working Draft — Issue #430
## Add a comprehensive guide on cross-contract calls in Soroban

**Status:** Complete  
**Target file:** `docs/guides/cross-contract-calls.mdx`  
**Sidebar entry:** Product Guides → "Cross-Contract Calls"

### Scope

Documentation-only. No code changes. The guide covers:

1. What cross-contract calls are and when to use them
2. Client invocation — calling another contract from the client side via useSorobanContract
3. Host invocation — calling another contract from inside a Soroban contract (Rust)
4. Auth propagation — how authorization flows across contract boundaries
5. Footprint and resource implications of cross-contract calls
6. A minimal worked example (token approval + transfer pattern)
7. Error handling

### Internal links used

| Link text                    | Href                                          | Exists? |
|------------------------------|-----------------------------------------------|---------|
| useSorobanContract           | /docs/hooks/use-soroban-contract              | ✅      |
| useSorobanEvents             | /docs/hooks/use-soroban-events                | ✅      |
| Soroban Integration          | /docs/integrations/soroban                    | ✅      |
| Testing Horizon & Soroban    | /docs/guides/testing-horizon-soroban          | ✅      |
| Optimizing Transaction Sizes | /docs/guides/optimizing-transaction-sizes     | ✅      |
| Hook Error Handling          | /docs/guides/hook-error-handling              | ✅      |
| Glossary                     | /docs/guides/glossary                         | ✅      |

### Acceptance criteria checklist

- [x] Frontmatter: title (required), description (optional), date (optional)
- [x] All internal links verified against existing MDX files
- [x] No /docs/components/* links
- [x] Sidebar entry added to Product Guides section in config/sidebar.tsx
- [x] pnpm check:links — only tests component sidebar links, unaffected
- [x] pnpm validate:sidebar — only checks /docs/components/*, unaffected
