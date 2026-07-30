# Working Draft — Issue #423
## Document the full transaction lifecycle from build to confirmation

**Status:** Complete  
**Target file:** `docs/guides/transaction-lifecycle.mdx`  
**Sidebar entry:** Product Guides → "Transaction Lifecycle"

### Scope

Documentation-only. No code changes. The guide covers:

1. Overview of the four phases: build → sign → submit → confirm
2. Build — TransactionBuilder, fee, sequence number, timeout
3. Sign — single signer, multisig, wallet signing
4. Submit — Horizon submitTransaction, async result shape
5. Confirm — ledger close timing (~5 s), polling vs streaming, finality
6. Full worked TypeScript example end-to-end
7. Error handling per phase
8. Related links to existing verified pages

### Internal links used

| Link text                    | Href                                          | Exists? |
|------------------------------|-----------------------------------------------|---------|
| useStellarPayment            | /docs/hooks/use-stellar-payment               | ✅      |
| useStellarWallet             | /docs/hooks/use-stellar-wallet                | ✅      |
| useTransactionHistory        | /docs/hooks/use-transaction-history           | ✅      |
| Transaction Batching         | /docs/guides/transaction-batching             | ✅      |
| Optimizing Transaction Sizes | /docs/guides/optimizing-transaction-sizes     | ✅      |
| Hook Error Handling          | /docs/guides/hook-error-handling              | ✅      |
| Stellar Horizon              | /docs/integrations/horizon                    | ✅      |
| Glossary                     | /docs/guides/glossary                         | ✅      |

### Acceptance criteria checklist

- [x] Frontmatter: title (required), description (optional), date (optional)
- [x] All internal links verified against existing MDX files
- [x] No /docs/components/* links
- [x] Sidebar entry added to Product Guides section in config/sidebar.tsx
- [x] pnpm check:links — only tests component sidebar links, unaffected
- [x] pnpm validate:sidebar — only checks /docs/components/*, unaffected
