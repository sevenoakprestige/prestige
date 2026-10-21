import React, { useCallback, useId } from 'react'
import { StringInputProps, set, unset } from 'sanity'
import { Stack, TextInput, Text, Flex, Button } from '@sanity/ui'

export const PRESET_CATEGORIES = [
  'Company Formation',
  'Banking & Payments',
  'Tax & Accounting',
  'Compliance & Legal',
  'Subsidiaries & Expansion',
  'Guides en Français',
]

export function CategoryInput(props: StringInputProps) {
  const { value = '', onChange, readOnly } = props
  const listId = useId()

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange]
  )

  const handleSelect = useCallback(
    (category: string) => {
      onChange(set(category))
    },
    [onChange]
  )

  return (
    <Stack space={3}>
      <TextInput
        {...props.elementProps}
        value={value}
        onChange={handleChange}
        list={listId}
        placeholder="Type a new category or click a suggestion below..."
        readOnly={readOnly}
      />

      <datalist id={listId}>
        {PRESET_CATEGORIES.map((cat) => (
          <option key={cat} value={cat} />
        ))}
      </datalist>

      <Stack space={2}>
        <Text size={1} weight="semibold" muted>
          Existing categories (click to assign):
        </Text>
        <Flex gap={2} wrap="wrap">
          {PRESET_CATEGORIES.map((cat) => {
            const isSelected = value === cat
            return (
              <Button
                key={cat}
                type="button"
                mode={isSelected ? 'default' : 'ghost'}
                tone={isSelected ? 'primary' : 'default'}
                text={cat}
                size={1}
                fontSize={1}
                padding={2}
                onClick={() => handleSelect(cat)}
                disabled={readOnly}
              />
            )
          })}
        </Flex>
      </Stack>
    </Stack>
  )
}
