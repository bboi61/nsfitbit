function mySettings(props) {
  return (
    <Page>
        <TextInput
          label="Api endpoint (if blank, defaults to local xDrip endpoint)"
          settingsKey="endpoint"
        />
        <TextInput
        label="API SECRET"
        settingsKey="apiSecret"
        />
        <Toggle
          settingsKey="usemgdl"
          label={`Units: ${props.settingsStorage.getItem('usemgdl')== 'true' ? 'mgdl' : 'mmol'}`}
        />

        <TextInput
          label="High BG threshold"
          settingsKey="highThreshold"
        />

        <TextInput
        label="Low BG threshold"
        settingsKey="lowThreshold"
        />

        <Toggle
        settingsKey="graphDynamicScale"
        label={`Graph dynamic scaling: ${props.settingsStorage.getItem('graphDynamicScale') === 'true' ? 'yes' : 'no'}`}
        onChange={value => props.settingsStorage.getItem('graphDynamicScale', value ? 'yes' : 'no')}
        />

        <TextInput
        label="Graph top BG"
        settingsKey="graphTopBG"
        />

        <Toggle
        settingsKey="activity"
        label={`Show HR & Steps: ${props.settingsStorage.getItem('activity') === 'true' ? 'yes' : 'no'}`}
        onChange={value => props.settingsStorage.getItem('activity', value ? 'yes' : 'no')}
        />

<Slider
  label="Number of CGM hours to plot (1 to 4)"
  settingsKey="cgmHours"
  min="1"
  max="4"
/>

<Slider
  label="Number of OpenAPS / Loop predictions to plot (0 to 3)"
  settingsKey="predictionHours"
  min="0"
  max="3"
/>
        <Toggle
        settingsKey="enableAlarms"
        label={`Enable alarms: ${props.settingsStorage.getItem('enableAlarms') === 'true' ? 'yes' : 'no'}`}
        onChange={value => props.settingsStorage.getItem('enableAlarms', value ? 'yes' : 'no')}
        />

        <Select
  label={`Predictive alarms`}
  settingsKey="alarmPredictions"
  options={[
    {name:"None"},
    {name:"1 CGM reading ahead"},
    {name:"2 CGM readings ahead"},
    {name:"3 CGM readings ahead"}
  ]}
/>

<Select
  label={`Status line 1`}
  settingsKey="statusLine1"
  options={[
    {name:"None"},
    {name:"IOB"},
    {name:"COB"},
    {name:"BWP"}
  ]}
/>

<Select
  label={`Status line 2`}
  settingsKey="statusLine2"
  options={[
    {name:"None"},
    {name:"IOB"},
    {name:"COB"},
    {name:"BWP"}
  ]}
/>
        <Toggle
        settingsKey="alwaysOn"
        label={`Screen: ${props.settingsStorage.getItem('alwaysOn') === 'true' ? 'always on' : 'sleep is on'}`}
        onChange={value => props.settingsStorage.getItem('alwaysOn', value ? 'always on' : 'sleep is on')}
        />
        <Toggle
        settingsKey="offOnNight"
        label={`Turn display off for the night (22-07): ${props.settingsStorage.getItem('offOnNight') === 'true' ? 'yes' : 'no'}`}
        onChange={value => props.settingsStorage.getItem('offOnNight', value ? 'yes' : 'no')}
        />
      <TextImageRow
        label="Fitbit NS watchface"
        sublabel="@Rytiggy / @nivz / @sulkaharo"
        icon="https://image.ibb.co/gbWF2H/twerp_bowtie_64.png"
      />
    </Page>
  );
}

registerSettingsPage(mySettings);
