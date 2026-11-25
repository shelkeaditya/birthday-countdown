// Serves objects from the R2 bucket at /r2/<key>
// e.g. /r2/images/Favicon.png -> R2 key "images/Favicon.png"
export async function onRequestGet({ env, params }) {
  const bucket = env["birthday-bucket"]; // binding name from Pages > Settings > Bindings
  const key = Array.isArray(params.path) ? params.path.join("/") : params.path;

  const object = await bucket.get(key);
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("Cache-Control", "public, max-age=86400");

  return new Response(object.body, { headers });
}
