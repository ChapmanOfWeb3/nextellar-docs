# Working Draft — Issue #428
## Add a comprehensive testing guide for Horizon and Soroban interactions

**Status:** Complete  
**Target file:** `docs/guides/testing-horizon-soroban.mdx`  
**Sidebar entry:** Product Guides → "Testing Horizon & Soroban"

### Scope

Documentation-only. No code changes. The guide covers:

1. Testing philosophy — unit vs integration, what to mock vs what to hit live
2. Mocking Horizon with MSW (already a project dependency via integrations/testing)
3. Mocking Soroban RPC responses
4. Integration test setup with Stellar Quickstart Docker
5. Testing Nextellar hooks (useStellarPayment, useSorobanContract) with vitest + @testing-library/react
6. Starter example — full test file for a payment flow
7. CI considerations

### Internal links used

| Link text                 | Href                                        | Exists? |
|---------------------------|---------------------------------------------|---------|
| useStellarPayment         | /docs/hooks/use-stellar-payment             | ✅      |
| useSorobanContract        | /docs/hooks/use-soroban-contract            | ✅      |
| useStellarWallet          | /docs/hooks/use-stellar-wallet              | ✅      |
| Testing (MSW)             | /docs/integrations/testing                  | ✅      |
| Soroban Integration       | /docs/integrations/soroban                  | ✅      |
| Stellar Horizon           | /docs/integrations/horizon                  | ✅      |
| Hook Error Handling       | /docs/guides/hook-error-handling            | ✅      |
| Transaction Lifecycle     | /docs/guides/transaction-lifecycle          | ✅      |
| Glossary                  | /docs/guides/glossary                       | ✅      |

### Acceptance criteria checklist

- [x] Frontmatter: title (required), description (optional), date (optional)
- [x] All internal links verified against existing MDX files
- [x] No /docs/components/* links
- [x] Sidebar entry added to Product Guides section in config/sidebar.tsx
- [x] pnpm check:links — only tests component sidebar links, unaffected
- [x] pnpm validate:sidebar — only checks /docs/components/*, unaffected
