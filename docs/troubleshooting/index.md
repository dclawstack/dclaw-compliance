# Troubleshooting

Common issues and solutions for DClaw Compliance.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-compliance

# Check logs
kubectl logs -n dclaw-compliance deployment/dclaw-compliance-backend

# Check database
kubectl get clusters -n dclaw-compliance
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
