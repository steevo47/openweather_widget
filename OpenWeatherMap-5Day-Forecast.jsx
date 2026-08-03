<Stack gap="sm">
  <Group justify="space-between">
    <Stack gap={0}>
      <Title order={3}>
        {data.city.name}
      </Title>

      <Text size="sm" c="dimmed">
        5-day weather forecast
      </Text>
      
    </Stack>

    <Image
      src={`https://openweathermap.org/payload/api/media/file/${data.list[0].weather[0].icon}.png`}
      w={72}
      h={72}
      fit="contain"
    />
  </Group>

  <Card withBorder radius="md" p="md">
    <Group justify="space-between">
      <Stack gap={2}>
        <Text size="sm">
          Current forecast
        </Text>

        <Text size="xl" fw={700}>
          {Math.round(data.list[0].main.temp)}°F
        </Text>

        <Text>
          {data.list[0].weather[0].description}
        </Text>
      </Stack>

      <Stack gap={2} align="flex-end">
        <Text size="sm">
          Feels like {Math.round(data.list[0].main.feels_like)}°F
        </Text>

        <Text size="sm">
          Humidity {data.list[0].main.humidity}%
        </Text>

        <Text size="sm">
          Wind {Math.round(data.list[0].wind.speed)} mph
        </Text>
      </Stack>
    </Group>
  </Card>

  <SimpleGrid spacing="sm">
    {data.list.map((item) => 
      item.dt_txt.slice(11) === "12:00:00" ? (
        <Card key={item.dt} withBorder radius="md" p="sm">
 
          <Group justify="space-between" align="center" wrap="nowrap">
            <Stack gap={2}>
              <Text size="xs">
                {
                  [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ] [
                     (
                       Math.floor(
                        (item.dt + data.city.timezone) / 86400
                           ) + 4
                             ) % 7
                    ]
                }
                {", "}
                  {item.dt_txt.slice(8, 10).replace(/^0/, "")}
                {" "}
                {
                  [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ][item.dt_txt.slice(5, 7) * 1 - 1]
                }
              </Text>
              
			  <Text fw={700}>
                {Math.round(item.main.temp)}°F
              </Text>

              <Text size="sm">
                {item.weather[0].main}
              </Text>
           </Stack>

           <Image
             src={`https://openweathermap.org/payload/api/media/file/${item.weather[0].icon}.png`}
             w={72}
             h={72}
           />
       </Group>
            <Stack gap={4}>   
            <Group gap="xs">
              <Badge size="sm" variant="light">
                {Math.round(item.pop * 100)}% rain
              </Badge>

              <Badge size="sm" variant="light">
                {item.main.humidity}% humidity
              </Badge>
            </Group>
          </Stack>
        </Card>
      ) : null
    )}
  </SimpleGrid>
</Stack>