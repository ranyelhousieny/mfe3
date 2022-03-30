export default function Root(
  props
) {
  return (
    <section>
      <h1
        style={{
          color: 'red',
        }}>
        By Rany ElHousieny{' '}
      </h1>
      {props.name} is mounted
      by Rany ElHousieny!
    </section>
  );
}
