import Link from "next/link";

export default function Breadcrumbs({ crumbs = [] }) {
  if (!crumbs.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs-ui">
      <div className="container">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li
                key={i}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {isLast ? (
                  <span itemProp="name" className="breadcrumb-current">
                    {crumb.label}
                  </span>
                ) : (
                  <Link href={crumb.href} itemProp="item" className="breadcrumb-link">
                    {i === 0 && (
                      <i className="ph-bold ph-house" style={{ marginRight: "4px", fontSize: "0.88rem" }}></i>
                    )}
                    <span itemProp="name">{crumb.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
